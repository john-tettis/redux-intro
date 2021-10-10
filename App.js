const INITIAL = {face: faces.start}

let faceReducer=(state=INITIAL, action)=>{
    switch(action.type){
        case 'ANGRY':
            return {face:faces.angry}
        case 'SAD':
            return {face:faces.sad}
        case 'CONFUSED':
            return {face:faces.confused}
        case 'HAPPY':
            return {face:faces.happy}
        case 'START':
            return {face:faces.start}
    }
    return state;

}
let store = Redux.createStore(faceReducer)

let buttons = document.querySelector('.button-container')
let faceDisplay = document.querySelector('#face')
faceDisplay.innerText = store.getState().face


buttons.addEventListener('click', (e) => {
    let target = e.target;
    if(target.className==='button-container') return;
    store.dispatch({type: target.id.toUpperCase()})
    faceDisplay.innerText = store.getState().face

})




