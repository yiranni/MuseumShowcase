var group;
var loader = new THREE.STLLoader();
var group = new THREE.Object3D();

function init() {
    var scene = new THREE.Scene();


    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);

    // create a render and set the size
    var webGLRenderer = new THREE.WebGLRenderer({
        alpha: true
    });
    webGLRenderer.setClearColor(new THREE.Color(0x000000), 0);
    webGLRenderer.setSize(window.innerWidth, window.innerHeight);
    webGLRenderer.shadowMapEnabled = true;

    // position and point the camera to the center of the scene
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 200;
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    var lights = []
    lights[0] = new THREE.PointLight(0xffffff, 1);
    lights[1] = new THREE.PointLight(0xffffff, 1);
    lights[2] = new THREE.PointLight(0xffffff, 1);
    lights[3] = new THREE.PointLight(0xffffff, 1);
    lights[4] = new THREE.PointLight(0xffffff, 0.9);
    lights[0].position.set(150, 150, 150);
    lights[1].position.set(-150, -150, -150);
    lights[2].position.set(0, 150, 0);
    lights[3].position.set(0, -150, 0);
    lights[4].position.set(0, 0, 150);


    scene.add(lights[4])
    scene.background = null


    document.getElementById("WebGL-output").appendChild(webGLRenderer.domElement);



    loader.load("assets/models/Marciana _Bust.stl", function (geometry) {

        var mat = new THREE.MeshPhongMaterial({
            color: 0xffffff
        });
        geometry.center()
        group = new THREE.Mesh(geometry, mat);
        group.rotation.x = -0.5 * Math.PI;
        group.rotation.z = -1.55
        group.scale.set(0.6, 0.6, 0.6);
        // console.log(group.position)
        scene.add(group);
    });

    var orbitControls = new THREE.OrbitControls(camera);
    orbitControls.autoRotate = true;
    var clock = new THREE.Clock();


    render();


    function render() {
        if (group) {
            if (group.rotation.z <= -0.3) {
                group.rotation.z += 0.013;

            }

            // group.rotation.x=0.5;
        }
        requestAnimationFrame(render);
        webGLRenderer.render(scene, camera);
    }

}