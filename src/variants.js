const variants = {
    flowLeftOpacity:{
        hidden:{
            opacity:0,
            left:-50
        },
        visible:{
            opacity:1,
            left:0,
        }
    },
    
    flowLeftRotate:{
        hidden:{
            rotate:0
        },
        visible:{
            rotate:-5
        }
    },

    flowRightOpacity:{
        hidden:{
            opacity:0,
            right:-50
        },
        visible:{
            opacity:1,
            right:0
        }
    },

    flowTopOpacity:{
        hidden:{
            opacity:0,
            bottom:-50
        },
        visible:{
            opacity:1,
            bottom:0
        }
    }
}

export default variants;