export const after = () => {
    perfLog('after')
  };
export const afterRender = () => {
    perfLog('afterRender')
  };
export const before = () => {
    perfLog('before')
};

const perfLog = (title)=> {
    const log = localStorage.getItem('perfLog')
    const n = localStorage.getItem('runCount');
    let data = `${n}:${title}:${window.performance.now()}/:/`
    localStorage.setItem('perfLog', log + data)
}
