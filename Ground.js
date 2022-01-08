class Ground{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
           

        }
        this.x = x
        this.y=y
        this.w = w
        this.h = h

        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
    }
    display(){
        var groundposition = this.body.position
        push ()
        translate (groundposition.x,groundposition.y)
        rectMode(CENTER)            
        strokeWeight(5)
        fill ("brown")
        rect(0,0,this.w,this.h)
        pop ()

    }
}