

const templateCenter = document.createElement('template');

templateCenter.innerHTML = `
<div id="main">
    <div id="infos">
        <div>Temps : 0</div>
        <div> Score : <span id="score"> 0 </span></div>
        <div>Multiplicateur : x1</div>
    </div>
    <div id="grilles">
    </div>
</div>
`;

export { templateCenter }