var faceInput = document.getElementById("wingColor");
var outerInput = document.getElementById("bodyColor");;
var innerInput = document.getElementById("beakColor");;
var bodyColor = hexToDec(faceInput.value.substring(1));
var outerColor = hexToDec(outerInput.value.substring(1));
var innerColor = hexToDec(innerInput.value.substring(1));
var modal = document.getElementById("myModal");



var javaCodeElement = document.querySelector(".modal-body");
var javaCode;
var fillingButton = document.getElementById("filling");
var noFillingButton = document.getElementById("noFilling");

faceInput.addEventListener("change",()=>{
    bodyColor = hexToDec(faceInput.value.substring(1))
})

outerInput.addEventListener("change",()=>{
    outerColor = hexToDec(outerInput.value.substring(1))
})

innerInput.addEventListener("change",()=>{
    innerColor = hexToDec(innerInput.value.substring(1))
})


fillingButton.addEventListener("click",(e) => {
    e.preventDefault();
    javaCode = `<pre>    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2d = (Graphics2D) g;
        g2d.translate(100,100);
        g2d.setStroke(new BasicStroke(2, BasicStroke.CAP_ROUND, BasicStroke.JOIN_ROUND));
        GeneralPath wing = new GeneralPath();
        wing.moveTo(373,152);
        wing.curveTo(350,250,180,250,160,154);
        wing.curveTo(150,118,183,79,206,92);
        wing.curveTo(240,97,270,151,373,152);

        GeneralPath body = new GeneralPath();
        body.moveTo(226,98);
        body.curveTo(208,45,142,20,109,35);
        body.quadTo(110,17,124,4);
        body.quadTo(101,11,93,30);
        body.quadTo(90,20,80,18);
        body.quadTo(88,39,85,41);
        body.curveTo(46,44,20,130,47,172);
        body.curveTo(100,286,274,286,312,219);


        GeneralPath feet = new GeneralPath();
        feet.moveTo(171,261);
        feet.quadTo(161,295,171,330);
        feet.moveTo(166,303);
        feet.lineTo(184,316);
        feet.moveTo(166,303);
        feet.lineTo(150,329);


        AffineTransform translateFeet = new AffineTransform();
        translateFeet.setToTranslation(40,3);
        Shape feet2 = translateFeet.createTransformedShape(feet);

        GeneralPath beak = new GeneralPath();
        beak.moveTo(40,93);
        beak.lineTo(13,104);
        beak.lineTo(36,119);

        AffineTransform rotateEye = new AffineTransform();
        rotateEye.setToRotation(90,89,92);
        Ellipse2D blackEyeEllipse = new Ellipse2D.Double(75,82,28,20);
        Shape blackEye = rotateEye.createTransformedShape(blackEyeEllipse);
        Ellipse2D whiteEye = new Ellipse2D.Double(89,88,5,10);
        g2d.setColor(new Color(${outerColor}));
        g2d.fill(body);
        `
        if(bodyColor != outerColor){
            javaCode += `        g2d.setColor(new Color(${bodyColor}));
            `
        }
        javaCode += `g2d.fill(wing);
        `
        if(outerColor != innerColor){
            javaCode += `        g2d.setColor(new Color(${innerColor}));
            `
        }
        javaCode += `
        g2d.fill(beak);

        g2d.setColor(Color.black);
        g2d.fill(blackEye);
        g2d.draw(body);
        g2d.draw(wing);
        g2d.draw(beak);
        g2d.setColor(Color.white);
        g2d.fill(whiteEye);
        g2d.setColor(Color.black);
        g2d.setStroke(new BasicStroke(4));
        g2d.draw(feet2);
        g2d.draw(feet);
    }</pre>`

        
        javaCodeElement.innerHTML = javaCode;
        modal.style.display = "block";



})



noFillingButton.addEventListener("click", (e)=>{
    e.preventDefault();

    javaCode = `<pre>    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2d = (Graphics2D) g;
        g2d.translate(100,100);
        g2d.setStroke(new BasicStroke(2, BasicStroke.CAP_ROUND, BasicStroke.JOIN_ROUND));
        GeneralPath wing = new GeneralPath();
        wing.moveTo(373,152);
        wing.curveTo(350,250,180,250,160,154);
        wing.curveTo(150,118,183,79,206,92);
        wing.curveTo(240,97,270,151,373,152);

        GeneralPath body = new GeneralPath();
        body.moveTo(226,98);
        body.curveTo(208,45,142,20,109,35);
        body.quadTo(110,17,124,4);
        body.quadTo(101,11,93,30);
        body.quadTo(90,20,80,18);
        body.quadTo(88,39,85,41);
        body.curveTo(46,44,20,130,47,172);
        body.curveTo(100,286,274,286,312,219);


        GeneralPath feet = new GeneralPath();
        feet.moveTo(171,261);
        feet.quadTo(161,295,171,330);
        feet.moveTo(166,303);
        feet.lineTo(184,316);
        feet.moveTo(166,303);
        feet.lineTo(150,329);


        AffineTransform translateFeet = new AffineTransform();
        translateFeet.setToTranslation(40,3);
        Shape feet2 = translateFeet.createTransformedShape(feet);

        GeneralPath beak = new GeneralPath();
        beak.moveTo(40,93);
        beak.lineTo(13,104);
        beak.lineTo(36,119);

        AffineTransform rotateEye = new AffineTransform();
        rotateEye.setToRotation(90,89,92);
        Ellipse2D blackEyeEllipse = new Ellipse2D.Double(75,82,28,20);
        Shape blackEye = rotateEye.createTransformedShape(blackEyeEllipse);
        Ellipse2D whiteEye = new Ellipse2D.Double(89,88,5,10);


        g2d.setColor(Color.black);
        g2d.fill(blackEye);
        g2d.draw(body);
        g2d.draw(wing);
        g2d.draw(beak);
        g2d.setColor(Color.white);
        g2d.fill(whiteEye);
        g2d.setColor(Color.black);
        g2d.setStroke(new BasicStroke(4));
        g2d.draw(feet2);
        g2d.draw(feet);
    }</pre>`;
    javaCodeElement.innerHTML = javaCode;
    modal.style.display = "block";
})


function hexToDec(hexString){
    return parseInt(hexString, 16);
  }


console.log(hexToDec(bodyColor))








// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

