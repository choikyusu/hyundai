(global as any).password = '';

function getGlobalVar() {
  return (global as any).password;
}

function setGlobalVar(newValue: number) {
  (global as any).myGlobalVar = newValue;
}

export { getGlobalVar, setGlobalVar };
