import type { User } from "./types"
import PianoAdapter from "./piano-adapter.js"

declare global {
  interface Window {
      tp: [];
      mixpanel: {
        track: (action:string, payload: {
          incode: string;
          location: string;
          type: string;
          status: string;
        })=>void;
      }
  }
}


/**
 *
 *  When we decide to ad a new ad service we will have to change the type of adServicer
 *  Currently it is just reliant on the PianoAdapter, but it could be any adapter that responds to
 *  .init() and takes the lifecycle methods along with matchers/tags.
 *
 */

export default class AdServer {
    afterAdRender?:(() => void)[];
    afterAdInit?:(() => void)[];
    beforeAdInit?:(() => void)[];
    thirdPartyCallbacks?:(()=> void)[];
    matchers?:string[];
    tags?:string[];
    user:User;
    adServicer?: PianoAdapter;
    constructor({
      afterAdRender = [],
      afterAdInit = [],
      beforeAdInit = [],
      matchers = [],
      thirdPartyCallbacks = [],
      tags = [],
      adServicer,
    }){
      this.afterAdInit = afterAdInit;
      this.afterAdRender = afterAdRender;
      this.beforeAdInit = beforeAdInit;
      this.matchers = matchers;
      this.tags = tags;
      this.thirdPartyCallbacks = thirdPartyCallbacks;
      this.user = this.setUser();
      this.adServicer = this.setAdapter(adServicer);
    }

    setAdapter(adServicer):PianoAdapter{
      const pianoConfig =   {
        afterRenderCallbacks: this.afterAdRender,
        matchers: this.matchers,
        tags: this.tags,
        thirdPartyCallbacks: this.thirdPartyCallbacks,
        user: this.user
     }
      switch (adServicer) {
        case "piano":{
          return new PianoAdapter(pianoConfig)
        }
        case "atk":{
          //configure in house AdService
        }
        default:{
          return new PianoAdapter(pianoConfig)
        }
      }
    }

    executeBeforeAdInit():void {
      this.beforeAdInit.forEach((cb) => cb());
    }
    executeAfterAdRender():void {
      this.afterAdRender.forEach((cb) => cb());
    }
    executeAfterAdInit():void {
      this.afterAdInit.forEach((cb) => cb());
    }

    setUser():User{
        return {
            aid: this.getAid(),
            token: this.getUserToken(),
        }
    }

    getAid() {
        //This will be set on the Dry.rb or User Context
        return "P3MUmmU9pu";
      }

    getUserToken():string{
        // function getCookie(name) {
        //   var c = document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)");
        //   if (c && c.length > 0) return c.pop();
        //   else return null;
        // }
        // return getCookie("user_token");
        return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY3RpdmVfbWVtYmVyc2hpcHMiOlsiY2lvIiwiY2NvIiwiYXRrIiwiY29va2Jvb2tfY29sbGVjdGlvbiIsInNjaG9vbCJdLCJhY3RpdmVfcmVnaXN0cmF0aW9ucyI6WyJjaW8iLCJjY28iLCJhdGsiLCJzY2hvb2wiXSwiYXVkIjoiYW1lcmljYW5vMTIzIiwiY2FuY2VsbGVkX21lbWJlcnNoaXBzIjpbXSwiZGZwX21lbWJlcnNoaXBfc3RyaW5nIjoiYWxsX2FjY2VzcyIsImVtYWlsIjoicm9tYW4udHVybmVyQGFtZXJpY2FzdGVzdGtpdGNoZW4uY29tIiwiZXhwIjoxNjUxNjE1MTAwLCJleHRlcm5hbF9pZCI6bnVsbCwiZmlyc3RfbmFtZSI6IlJvbWFuIiwiaWF0IjoxNjUxNjAwNzAwLCJpZCI6MTA5MjE4NzUsImlzcyI6ImFtZXJpY2FzdGVzdGtpdGNoZW4uY29tIiwianRpIjoiODA2MjYyMTJlNzljMzQ1Y2IwOTBiNmEzNmMwMTZmODYiLCJsYXN0X25hbWUiOiJUdXJuZXIiLCJzZWdtZW50IjoibXVsdGlzaXRlIiwicGFja2FnZV9uYW1lIjoiTXVsdGktU2l0ZSBNZW1iZXJzaGlwIiwicGlhbm9fYWN0aXZlX21lbWJlcnNoaXBzIjoiW1wiY2lvXCIsXCJjY29cIixcImF0a1wiLFwiY29va2Jvb2tfY29sbGVjdGlvblwiLFwic2Nob29sXCJdIiwicGlhbm9fYWN0aXZlX3JlZ2lzdHJhdGlvbnMiOiJbXCJjaW9cIixcImNjb1wiLFwiYXRrXCIsXCJzY2hvb2xcIl0iLCJwaWFub19jYW5jZWxsZWRfbWVtYmVyc2hpcHMiOiJbXSIsInBpYW5vX3NjaG9vbF9zZWdtZW50IjoiYWN0aXZlX3NlbGYiLCJwaWFub19zZWdtZW50IjoibXVsdGlzaXRlIiwicm9sZSI6ImFkbWluIiwic3ViIjoiMTA5MjE4NzUiLCJzdXJ2ZXkiOnsiaWQiOm51bGwsIm5hbWUiOm51bGwsImxvY2F0aW9uIjpudWxsLCJhY3RpdmVBdCI6bnVsbCwidmlld2VkQXQiOm51bGwsImNvbXBsZXRlZEF0IjpudWxsLCJjb21wbGV0aW9uVHlwZSI6bnVsbCwiZWxpZ2libGUiOmZhbHNlfSwiaWRfZGlnZXN0IjoiYjhlNGJlYzY4ZDliM2Y0Y2M1NGQ0NTk2MDIxZDM4YmYxMjY3Njk0OSJ9.7gKRyggl9fWbPazuy6UtB8IwiGF9V98wAU8fC_T7hYs";
    }

    dispatchAd(){
        this.executeBeforeAdInit();
        this.adServicer.init();
        this.executeAfterAdInit();
    }
}
