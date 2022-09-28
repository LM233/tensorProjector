import "./standalone"
function socratProjector(dataStr){
    const projector = document.createElement('vz-projector-app')
    projector.setAttribute("serving-mode", "demo")
    projector.setAttribute("projector-config-json-path", "standalone_projector_config.json")
    projector.setAttribute("data-input", dataStr)
    document.getElementById('socrat-projector').appendChild(projector)
}

module.exports = socratProjector