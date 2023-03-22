

nosex = 0;
nosey = 0;
Mimg = "";
Limg = "";
status = "";

function preload() {
    Mimg = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    Limg = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);

    if (status == "M") {
        image(Mimg, nosex - 35, nosey-5, 70, 40);
    }
    if (status == "L") {
        image(Limg, nosex - 25, nosey+10, 50, 30);
    }
}

function take_snapshot() {
    save("pic.png");
}

function modelLoaded() {
    console.log("poseNet is Initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
    }
}

function Moustache() {
    status = "M";
}

function Lipstick() {
    status = "L";
}
