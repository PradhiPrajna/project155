AFRAME.registerComponent("game-play",{
    schema:{
        elementId:{type:"string, default:#coinE1"},
    },

    update: function(){
        this.isCollied(this.data.elementId);
    },

    isCollied:function(elementId){
        const element = document.querySelector(elementId);
        element.addEventListner("collide",(e)=>{
            if (elementId.includes("#coin")){
                element.setAttribute("visible", false);
                console.log("ring collision");

            } 
            if(elementId.includes("#fish")){
                console.log("fish collision");
            }
        
        });
    },

    coinE1.setAttribute("static-body",{
        shape: "sphere",
        sphereRadius: 2
    })
});