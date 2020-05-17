
var loader = new THREE.STLLoader();
var group = new THREE.Object3D();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);
var scene1 = new THREE.Scene();

var scene2 = new THREE.Scene();
var mat = new THREE.MeshPhongMaterial({
    color: 0xffffff
});
var webGLRenderer = new THREE.WebGLRenderer({
    alpha: true
});

function portrait1() {

    webGLRenderer.setClearColor(new THREE.Color(0x000000), 0);
    webGLRenderer.setSize(window.innerWidth, window.innerHeight);
    webGLRenderer.shadowMapEnabled = true;

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


    scene1.add(lights[4])
    scene1.background = null


    document.getElementById("Marciana").appendChild(webGLRenderer.domElement);

    loader.load("assets/models/Marciana _Bust.stl", function (geometry) {

        var mat = new THREE.MeshPhongMaterial({
            color: 0xffffff
        });
        geometry.center()
        group = new THREE.Mesh(geometry, mat);
        group.rotation.x = -0.5 * Math.PI;
        group.rotation.z = -1.55
        group.scale.set(0.4, 0.4, 0.4);
        // console.log(group.position)
        scene1.add(group);
    });

    var orbitControls = new THREE.OrbitControls(camera);
    orbitControls.autoRotate = true;
    var clock = new THREE.Clock();


    render1();

}

function portrait2() {

    webGLRenderer.setClearColor(new THREE.Color(0x000000), 0);
    webGLRenderer.setSize(window.innerWidth, window.innerHeight);
    webGLRenderer.shadowMapEnabled = true;

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


    scene2.add(lights[4])
    scene2.background = null


    document.getElementById("Hemingway").appendChild(webGLRenderer.domElement);

    loader.load("assets/models/Hemingway.stl", function (geometry) {


        geometry.center()
        group = new THREE.Mesh(geometry, mat);
        group.rotation.x = -0.5 * Math.PI;
        group.rotation.z = -1.55
        group.scale.set(0.4, 0.4, 0.4);
        scene2.add(group);
    });

    var orbitControls = new THREE.OrbitControls(camera);
    orbitControls.autoRotate = true;
    var clock = new THREE.Clock();


    render2();

}

function render1() {
    if (group) {
        // if (group.rotation.z <= -0.3) {
            group.rotation.z += 0.003;

        // }
    }

    requestAnimationFrame(render1);
    webGLRenderer.render(scene1, camera);

}

function render2() {
    if (group) {
        // if (group.rotation.z <= -1.5) {
            group.rotation.z += 0.001;

        // }
    }

    requestAnimationFrame(render2);
    webGLRenderer.render(scene2, camera);

}




$(document).ready(function () {
    let $all_title = $('.title')
    let $titleList = $('.title').text().split("")
    $(".title").text("")
    $.each($titleList, function (idx, elem) {
        var newEL = $("<span/>").text(elem).css({
            opacity: 0,

        });
        //append it to the welcome message
        newEL.appendTo($all_title);
        //set the delay on the animation for this element
        newEL.delay(idx * 100);
        //animate the opacity back to full 1
        newEL.animate({
            opacity: 1
        }, 2000);
    });
    $(".title").delay(2000).animate({
        "font-size": "18px"
    }, 3000)

    $(".start").delay(6000).fadeIn(1000)
  
    clickStart()

})




function clickStart() {
    $(".sampleImg").click(function () {
        $('#sample2').stop().animate({
            "x": "-=30"
        }, 2000)
        $('#sample1').stop().animate({
            "x": "+=30"
        }, 2000)
        $('#sample3').stop().animate({
            "x": "+=30"
        }, 2000)
        $('.homepage').delay(2000).fadeOut(500)
        loadGallery()
    })


}
function loadGallery() {
    $('.gallery').fadeIn(2000)
    movetoPage1()
}
function movetoPage1() {
    
    $('.page1').delay(2000).fadeIn(200)
    $('.page1 >.model-descr').delay(2000).animate({
        "top": "20%"
    }, 3000)
    portrait1()
    $('#Marciana').delay(3500).animate({
        "left": "-=100%"
    }, 1000, 'linear')
    $(".header").stop().delay(5000).fadeIn(3000)
    // setTimeout(clickStart, 2200)

}


$('.header').click(function (event) {
    event.preventDefault();
    $(this).next('div').slideToggle('500');
    $(this).find('i').toggleClass('fa-caret-up fa-caret-down')


    if ($(this).hasClass("isUp")) {
        $('#Marciana').stop().animate({
            "bottom": "0%"
        }, 600)
        $('#Hemingway').stop().animate({
            "bottom": "0%"
        }, 600)
        
    } else {
        $('#Marciana').stop().animate({
            "bottom": "20%"
        }, 600)
        $('#Hemingway').stop().animate({
            "bottom": "20%"
        }, 600)
        
    }

    $(this).toggleClass("isUp")


    $('.model-descr').fadeToggle(1000)
    $(".control").fadeToggle(500)
    // startAnimation = true;
});



