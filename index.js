function socratProjector(height, width, dataStr){
    const projector = document.createElement('vz-projector-app')
    projector.setAttribute("serving-mode", "demo")
    projector.setAttribute("projector-config-json-path", "standalone_projector_config.json")
    projector.setAttribute("data-input", dataStr)
    document.getElementById('socrat-projector').appendChild(projector)
    const s = document.createElement('script');
    s.setAttribute('src', "https://cdn.jsdelivr.net/gh/lm233/tensorprojector/standalone.js" );
    document.getElementById('socrat-projector').appendChild(s);
}

module.exports = socratProjector