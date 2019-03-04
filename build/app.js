// https://github.com/parcel-bundler/parcel/issues/289#issuecomment-393106708
//if (module.hot) module.hot.dispose(() => { window.location.reload(); throw new Error('Reloading') })
// tslint:disable:no-import-side-effect
//import './style.styl'
import * as PIXI from "pixi.js";
//import './style.css'
//const s = require('./style.css')
/// <reference path='./index.d.ts' />
import BunnyPNG from './bunny.png';
import catPNG from './cat.png';
import HRentitySpritesheetJSON from './img/HRentitySpritesheet.json';
//import Bunny2PNG from './bunny2.png'
/*
import { Book } from './factorio-data/book'
import bpString from './factorio-data/bpString'
import G from './common/globals'
import { InventoryContainer } from './panels/inventory'
import { TilePaintContainer } from './containers/paintTile'
import { BlueprintContainer } from './containers/blueprint'
import { ToolbarContainer } from './panels/toolbar'
import { QuickbarContainer } from './panels/quickbar'
import { InfoEntityPanel } from './panels/InfoEntityPanel';
import { InfoContainer } from './panels/info'
import Blueprint from './factorio-data/blueprint'
import FileSaver from 'file-saver'
import initDoorbell from './doorbell'
import actions from './actions'
import initDatGui from './datgui'
import spritesheetsLoader from './spritesheetsLoader'
import * as Editors from './editors/factory'
import Entity from './factorio-data/entity'
import Dialog from './controls/dialog'
import * as History from './factorio-data/history'

PIXI.settings.MIPMAP_TEXTURES = PIXI.MIPMAP_MODES.ON
PIXI.settings.ROUND_PIXELS = true
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR
PIXI.settings.WRAP_MODE = PIXI.WRAP_MODES.REPEAT
PIXI.settings.RENDER_OPTIONS.antialias = true // for wires
PIXI.settings.RENDER_OPTIONS.resolution = window.devicePixelRatio
PIXI.GRAPHICS_CURVES.adaptive = true
*/
// @ts-ignore
const html_div_message = document.getElementById('message');
// @ts-ignore
const html_canvas_editor = document.getElementById('editor');
// @ts-ignore
html_div_message.innerHTML += "isMobile=" + JSON.stringify(PIXI.utils.isMobile.any);
// @ts-ignore
if (PIXI.utils.isMobile.any) {
    alert('This application is not compatible with mobile devices.');
    //prompt/alert/confirm
    //throw new Error(text)
}
const app = new PIXI.Application({
    width: 800, height: 600, backgroundColor: 0x1099bb,
    view: html_canvas_editor
});
console.log("Start at " + new Date().toLocaleTimeString("fr-FR"));
html_div_message.innerHTML += " test";
if (app.renderer.type == PIXI.RENDERER_TYPE.WEBGL) {
    console.log("Using WebGL " + JSON.stringify(app.renderer.screen));
    html_div_message.innerHTML += " Using WebGL ";
}
else {
    console.log("Using Canvas");
    html_div_message.innerHTML += " Using Canvas ";
}
let loader = PIXI.Loader.shared;
//let sprites:PIXI.Sprite = <PIXI.Sprite>{};
loader.add('catP', catPNG);
loader.add("HRentitySpritesheetJSON", HRentitySpritesheetJSON);
//loader.add("HRentitySpritesheetPNG", HRentitySpritesheetPNG)
loader.load();
loader.on("complete", () => {
    html_div_message.innerHTML += "chat=" + loader.resources.catP.url;
    let cat25 = PIXI.Sprite.from(loader.resources.catP.texture);
    app.stage.addChild(cat25);
    let HR = loader.resources.HRentitySpritesheet.textures;
    let cat26 = PIXI.Sprite.from(HR["graphics/entity/transport-belt/hr-transport-belt.png"]);
    app.stage.addChild(cat26);
});
//loader.add('iconSpritesheetJSON', './img/iconSpritesheet.json')
//loader.add('scoreFont', 'assets/score.fnt');
//loader.add("bunny2.png")
let cat23;
let spritesheetJSON;
let spritesheetPNG;
/*
loader.load(() => {
    
    //let catT = PIXI.Texture.from(catPNG)
    cat23 = PIXI.Sprite.from(loader.resources.catP.url)
    html_div_message.innerHTML += "statut="+JSON.stringify(cat23.getBounds())
    //sprites.SiconSpritesheetJSON = PIXI.TilingSprite.from(resources.iconSpritesheet.texture);
    //sprites.scoreFont = new PIXI.TilingSprite(resources.scoreFont.texture);
    //spritesheetJSON = PIXI.loader.resources["assets/spritesheet.json"].spritesheet;
    //spritesheetPNG = new PIXI.Sprite(spritesheetJSON.textures["image.png"]);
})
loader.on("error",()=> {// called once per errored file
    html_div_message.innerHTML += " ERROR "
})
loader.on("load",()=> {// called once per loaded file
    html_div_message.innerHTML += loader.progress+" "
})
loader.on("complete",()=> {// called once when the queued resources all load
    html_div_message.innerHTML += " FIN"
    app.stage.addChild(cat23)
    html_div_message.innerHTML += "bunny_sprite_bounds:"+JSON.stringify(cat23.getBounds())
})

*/
//let catT = PIXI.Texture.from(catPNG)
//cat = PIXI.Sprite.from(catT)
//app.stage.addChild(cat)
/*
function setup() {
    let sprite2 = new PIXI.Sprite(PIXI.loader.resources["bunny2.png"].texture);
    console.log("bunny2_sprite_bounds:"+JSON.stringify(sprite2.getBounds()))
    app.stage.addChild(sprite2);
}
*/
var texture = PIXI.Texture.from(BunnyPNG);
//var texture = PIXI.Texture.from('./bunny.png')
//let texture = PIXI.utils.TextureCache[BunnyPNG];
var bunny = PIXI.Sprite.from(texture);
// center the sprite's anchor point
bunny.anchor.set(0.5);
// move the sprite to the center of the screen
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;
bunny.interactive = true;
bunny.buttonMode = true;
console.log("bunny_sprite_bounds:" + JSON.stringify(bunny.getBounds()) + " bunny_texture_heigth:" + JSON.stringify(texture.height));
app.stage.addChild(bunny);
bunny.on("click", toto);
function toto() {
    html_div_message.innerHTML += "clic ! ";
}
var recta = new PIXI.Graphics();
recta.beginFill(0xFFFF00);
recta.lineStyle(5, 0xFF0000);
recta.drawRect(0, 0, 100, 100);
recta.y = 300;
app.stage.addChild(recta);
console.log("recta_graphics_bounds:" + JSON.stringify(recta.getBounds()) + " " + JSON.stringify(app.stage.getBounds()));
// Listen for animate update
app.ticker.add(function (delta) {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    bunny.rotation += 0.1 * delta;
});
/*
PIXI.Loader.shared.add('bunny', 'bunny2.png').load((loader, resources) => {
    // This creates a texture from a 'bunny.png' image
    const bunnyS = new PIXI.Sprite(resources.bunny.texture);

    // Setup the position of the bunny
    bunnyS.x = app.renderer.width / 2;
    bunnyS.y = app.renderer.height / 2;

    // Rotate around the center
    bunnyS.anchor.x = 0.5;
    bunnyS.anchor.y = 0.5;

    // Add the bunny to the scene we are building
    app.stage.addChild(bunnyS);

    // Listen for frame updates
    app.ticker.add(() => {
         // each frame we spin the bunny around a bit
         bunnyS.rotation += 0.01;
    });
});
*/
// https://www.w3schools.com/jsref/prop_style_display.asp
//html_div_message.style.display = "none";
// If the tab is not active then stop the app
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible')
        app.start();
    else
        app.stop();
    // If the tab is not active then stop the app
});
/*

const params = window.location.search.slice(1).split('&')

var renderOnly:boolean = params.includes('renderOnly')

let bpSource: string
let bpIndex = 0
for (const p of params) {
    if (p.includes('source')) {
        bpSource = p.split('=')[1]
    }
    if (p.includes('index')) {
        bpIndex = Number(p.split('=')[1])
    }
}

//PIXI.settings.MIPMAP_TEXTURES = PIXI.MIPMAP_MODES.ON
//PIXI.settings.ROUND_PIXELS = true
//PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR
//PIXI.settings.WRAP_MODE = PIXI.WRAP_MODES.REPEAT
//PIXI.settings.RENDER_OPTIONS.antialias = true // for wires
//PIXI.settings.RENDER_OPTIONS.resolution = window.devicePixelRatio
//PIXI.GRAPHICS_CURVES.adaptive = true
// PIXI.settings.PREFER_ENV = 1
// PIXI.settings.PRECISION_VERTEX = PIXI.PRECISION.HIGH
// PIXI.settings.PRECISION_FRAGMENT = PIXI.PRECISION.HIGH









//https://pixijs.download/v5.0.0-rc.2/docs/index.html
let app:PIXI.Application = new PIXI.Application({ view: document.getElementById('editor') as HTMLCanvasElement })
//document.body.appendChild(app.view)

document.getElementById('loadingMsg').innerHTML = "test"
//document.fonts.ready



//const app = new PIXI.Application();
// Add the view to the DOM
//document.body.appendChild(app.view);
//document.getElementById("editor").appendChild(app.view)

// ex, add display objects
//app.stage.addChild(PIXI.Sprite.from('maneki.jpg'));

// https://github.com/pixijs/pixi.js/issues/3928
// G.app.renderer.plugins.interaction.moveWhenInside = true
// G.app.renderer.plugins.interaction.interactionFrequency = 1

//https://developer.mozilla.org/en-US/docs/Web/Events/resize
app.renderer.resize(window.innerWidth, window.innerHeight)
window.addEventListener('resize', () => {
    app.renderer.resize(window.innerWidth, window.innerHeight)
    //BPC.viewport.setSize(G.app.screen.width, G.app.screen.height)
    //BPC.viewport.updateTransform()
}, false)

app.renderer.plugins.interaction.on("mouseover", function(entity) {
    console.log("Mouse over an entity. this="+this+" entity="+entity)
    }
)
app.renderer.plugins.interaction.on("mouseout", function(entity) {
    console.log("Mouse not over an entity. this="+this+" entity="+entity)
    }
)

var sprite:PIXI.Sprite = PIXI.Sprite.from('./maneki.jpg')
console.log("sprite="+sprite+typeof(sprite))

sprite.position.set(230,264)
sprite.anchor.x = 0.5
sprite.anchor.y = 0.5
// set the sprite to be interactive, this is really important
// otherwise the sprite will not listen to interactions or dispatch any event
sprite.interactive = true
// assign a different listen to each event
// pixi also gives you access to mouse down/up events
sprite.on('mouseover', onOver)
sprite.on('mouseout', onOut)
app.stage.addChild(sprite)
function onOver (eventData) {
    sprite.scale.x += 0.6
    sprite.scale.y += 0.6
}
function onOut (eventData) {
    sprite.scale.x -= 0.6
    sprite.scale.y -= 0.6
}
// start animating
//animate();
function animate() {
    requestAnimationFrame(animate);
    // render the root container
    app.renderer.render(app.stage)
}

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') app.start()
    else app.stop()
    // If the tab is not active then stop the app
})
*/
/*
G.BPC = new BlueprintContainer()
G.app.stage.addChild(G.BPC)

G.toolbarContainer = new ToolbarContainer()
G.app.stage.addChild(G.toolbarContainer)

G.quickbarContainer = new QuickbarContainer(G.quickbarRows)
G.app.stage.addChild(G.quickbarContainer)

G.infoEntityPanel = new InfoEntityPanel()
G.app.stage.addChild(G.infoEntityPanel)


//G.app.stage.on("Mouse over an entity",(entity: Entity|undefined)=>{G.infoEntityPanel.updateVisualization(entity)})
//G.app.stage.on("Mouse not over an entity", ()=>{G.infoEntityPanel.updateVisualization(undefined)})

G.dialogsContainer = new PIXI.Container()
G.app.stage.addChild(G.dialogsContainer)

G.paintIconContainer = new PIXI.Container()
G.app.stage.addChild(G.paintIconContainer)

Promise.all(
    [
        // Get bp from source
        bpSource ? bpString.findBPString(bpSource) : undefined,
        // Wait for fonts to get loaded
        document.fonts.ready
    ]
    // Load spritesheets
    .concat(spritesheetsLoader.getAllPromises())
)
.then(data => {
    // Load quickbarItemNames from localStorage
    if (localStorage.getItem('quickbarItemNames')) {
        const quickbarItemNames = JSON.parse(localStorage.getItem('quickbarItemNames'))
        G.quickbarContainer.generateSlots(quickbarItemNames)
    }

    if (!bpSource) {
        G.bp = new Blueprint()
        G.BPC.initBP()
        finishSetup()
    } else {
        loadBp(data[0], false).then(finishSetup)
    }

    function finishSetup() {
        G.BPC.centerViewport()
        G.loadingScreen.hide()
    }
})
.catch(error => console.error(error))

function loadBp(bp: string, clearData = true) {
    return bpString.decode(bp)
        .then(data => {

            if (data instanceof Book) {
                G.book = data
                G.bp = G.book.getBlueprint(bpIndex)

                guiBPIndex
                    .max(G.book.blueprints.length - 1)
                    .setValue(bpIndex)
            } else {
                G.book = undefined
                G.bp = data

                guiBPIndex
                    .setValue(0)
                    .max(0)
            }

            if (clearData) G.BPC.clearData()
            G.BPC.initBP()

            Dialog.closeAll()

            console.log('Loaded BP String')
        })
        .catch(error => console.error(error))
}

// If the tab is not active then stop the app
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') G.app.start()
    else G.app.stop()
})

window.addEventListener('unload', () => {
    G.app.stop()
    G.app.renderer.textureGC.unload(G.app.stage)
    G.app.destroy()
})

document.addEventListener('mousemove', e => {
    if (G.currentMouseState === G.mouseStates.PANNING) {
        G.BPC.viewport.translateBy(e.movementX, e.movementY)
        G.BPC.viewport.updateTransform()
    }
})

actions.copyBPString.bind(e => {
    if (G.bp.isEmpty()) return

    if (navigator.clipboard && navigator.clipboard.writeText) {
        bpString.encode(G.bp)
            .then(s => navigator.clipboard.writeText(s))
            .then(() => console.log('Copied BP String'))
            .catch(error => console.error(error))
    } else {
        const data = bpString.encodeSync(G.bp)
        if (data.value) {
            e.clipboardData.setData('text/plain', data.value)
            console.log('Copied BP String')
        } else {
            console.error(data.error)
        }
    }
})

actions.pasteBPString.bind(e => {
    G.loadingScreen.show()

    const promise = navigator.clipboard && navigator.clipboard.readText ?
        navigator.clipboard.readText() :
        Promise.resolve(e.clipboardData.getData('text'))

    promise
        .then(bpString.findBPString)
        .then(loadBp)
        .then(() => G.loadingScreen.hide())
        .catch(error => console.error(error))
})

actions.clear.bind(() => {
    G.BPC.clearData()
    G.bp = new Blueprint()
    G.BPC.initBP()
})

actions.takePicture.bind(() => {
    if (G.bp.isEmpty()) return

    if (G.renderOnly) G.BPC.cacheAsBitmap = false
    G.BPC.viewportCulling = false

    const texture = G.app.renderer.generateTexture(G.BPC, PIXI.SCALE_MODES.LINEAR, 1)
    texture.frame = G.BPC.getBlueprintBounds()
    texture.updateUvs()

    G.app.renderer.plugins.extract.canvas(new PIXI.Sprite(texture)).toBlob((blob: Blob) => {
        FileSaver.saveAs(blob, G.bp.name + '.png')
        console.log('Saved BP Image')
    })

    if (G.renderOnly) G.BPC.cacheAsBitmap = true
    G.BPC.viewportCulling = true
})

actions.showInfo.bind(() => {
    G.BPC.overlayContainer.overlay.visible = !G.BPC.overlayContainer.overlay.visible
})

actions.info.bind(() => {
    InfoContainer.toggle()
})

actions.closeWindow.bind(() => {
    Dialog.closeLast()
})

actions.inventory.bind(() => {
    if (!G.renderOnly) {
        // If there is a dialog open, assume user wants to close it
        if (Dialog.anyOpen()) {
            Dialog.closeLast()
        } else {
            new InventoryContainer('Inventory', undefined, G.BPC.spawnPaintContainer.bind(G.BPC))
                .show()
        }
    }
})

actions.focus.bind(() => G.BPC.centerViewport())

actions.rotate.bind(() => {
    if (G.BPC.hoverContainer && G.currentMouseState === G.mouseStates.NONE) {
        G.BPC.hoverContainer.entity.rotate(false, true)
    } else if (G.currentMouseState === G.mouseStates.PAINTING) {
        G.BPC.paintContainer.rotate()
    }
})

actions.reverseRotate.bind(() => {
    if (G.BPC.hoverContainer && G.currentMouseState === G.mouseStates.NONE) {
        G.BPC.hoverContainer.entity.rotate(true, true)
    } else if (G.currentMouseState === G.mouseStates.PAINTING) {
        G.BPC.paintContainer.rotate(true)
    }
})

actions.pipette.bind(() => {
    if (G.BPC.hoverContainer && G.currentMouseState === G.mouseStates.NONE) {

        const entity = G.BPC.hoverContainer.entity
        const itemName = entity.entityData.minable.result
        const direction = entity.directionType === 'output' ? (entity.direction + 4) % 8 : entity.direction
        G.BPC.spawnPaintContainer(itemName, direction)

    } else if (G.currentMouseState === G.mouseStates.PAINTING) {
        G.BPC.paintContainer.destroy()
    }
})

actions.increaseTileBuildingArea.bind(() => {
    if (G.BPC.paintContainer instanceof TilePaintContainer) {
        G.BPC.paintContainer.increaseSize()
    }
})

actions.decreaseTileBuildingArea.bind(() => {
    if (G.BPC.paintContainer instanceof TilePaintContainer) {
        G.BPC.paintContainer.decreaseSize()
    }
})

actions.undo.bind(() => {
    if (History.canUndo()) History.undo()
})

actions.redo.bind(() => {
    if (History.canRedo()) History.redo()
})

actions.generateOilOutpost.bind(() => {
    G.bp.generatePipes()
})

actions.pan.bind(() => {
    if (!G.BPC.hoverContainer && G.currentMouseState === G.mouseStates.NONE) {
        G.currentMouseState = G.mouseStates.PANNING
        G.BPC.cursor = 'move'
    }
}, () => {
    if (G.currentMouseState === G.mouseStates.PANNING) {
        G.currentMouseState = G.mouseStates.NONE
        G.BPC.cursor = 'inherit'
    }
})

actions.zoomIn.bind(() => {
    G.BPC.zoom(true)
})

actions.zoomOut.bind(() => {
    G.BPC.zoom(false)
})

actions.build.bind(() => {
    if (G.currentMouseState === G.mouseStates.PAINTING) {
        G.BPC.paintContainer.placeEntityContainer()
    }
})

actions.mine.bind(() => {
    if (G.BPC.hoverContainer && G.currentMouseState === G.mouseStates.NONE) {
        G.bp.removeEntity(G.BPC.hoverContainer.entity)
    }
    if (G.currentMouseState === G.mouseStates.PAINTING) {
        G.BPC.paintContainer.removeContainerUnder()
    }
})

actions.moveEntityUp.bind(() => {
    if (G.BPC.hoverContainer && G.currentMouseState === G.mouseStates.NONE) {
        G.BPC.hoverContainer.entity.moveBy({ x: 0, y: -1 })
    }
})
actions.moveEntityLeft.bind(() => {
    if (G.BPC.hoverContainer && G.currentMouseState === G.mouseStates.NONE) {
        G.BPC.hoverContainer.entity.moveBy({ x: -1, y: 0 })
    }
})
actions.moveEntityDown.bind(() => {
    if (G.BPC.hoverContainer && G.currentMouseState === G.mouseStates.NONE) {
        G.BPC.hoverContainer.entity.moveBy({ x: 0, y: 1 })
    }
})
actions.moveEntityRight.bind(() => {
    if (G.BPC.hoverContainer && G.currentMouseState === G.mouseStates.NONE) {
        G.BPC.hoverContainer.entity.moveBy({ x: 1, y: 0 })
    }
})

actions.openEntityGUI.bind(() => {
    if (G.BPC.hoverContainer !== undefined) {
        // console.log(G.BPC.hoverContainer.entity.getRawData())
        if (G.currentMouseState === G.mouseStates.NONE) {
            const editor = Editors.createEditor(G.BPC.hoverContainer.entity)
            if (editor === undefined) return
            Dialog.closeAll()
            editor.show()
        }
    }
})

let entityForCopyData: Entity
actions.copyEntitySettings.bind(() => {
    if (G.BPC.hoverContainer !== undefined) {
        // Store reference to source entity
        entityForCopyData = G.BPC.hoverContainer.entity
    }
})
actions.pasteEntitySettings.bind(() => {
    if (G.BPC.hoverContainer !== undefined) {
        // Hand over reference of source entity to target entity for pasting data
        G.BPC.hoverContainer.entity.pasteSettings(entityForCopyData)
    }
})

actions.quickbar1.bind(() => G.quickbarContainer.bindKeyToSlot(0))
actions.quickbar2.bind(() => G.quickbarContainer.bindKeyToSlot(1))
actions.quickbar3.bind(() => G.quickbarContainer.bindKeyToSlot(2))
actions.quickbar4.bind(() => G.quickbarContainer.bindKeyToSlot(3))
actions.quickbar5.bind(() => G.quickbarContainer.bindKeyToSlot(4))
actions.quickbar6.bind(() => G.quickbarContainer.bindKeyToSlot(5))
actions.quickbar7.bind(() => G.quickbarContainer.bindKeyToSlot(6))
actions.quickbar8.bind(() => G.quickbarContainer.bindKeyToSlot(7))
actions.quickbar9.bind(() => G.quickbarContainer.bindKeyToSlot(8))
actions.quickbar10.bind(() => G.quickbarContainer.bindKeyToSlot(9))
actions.changeActiveQuickbar.bind(() => G.quickbarContainer.changeActiveQuickbar())
*/
