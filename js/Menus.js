/**
 * Copyright (c) 2006-2012, JGraph Ltd
 * 
 * Modified version of the mxgraph GraphEditor. 
 * 2022, Muhammad Afif Abroory (https://github.com/afifabroory/org-chart-editor2)
 */
function Menubar(e,t){this.editorUi=e,this.container=t}function Menu(e,t){mxEventSource.call(this),this.funct=e,this.enabled=null==t||t}(Menus=function(e){this.editorUi=e,this.menus={},this.init(),mxClient.IS_SVG||(new Image().src=this.checkmarkImage)}).prototype.defaultFont="Helvetica",Menus.prototype.defaultFontSize="12",Menus.prototype.defaultMenuItems=["edit","view","arrange","extras"],Menus.prototype.defaultFonts=["Helvetica","Verdana","Times New Roman","Garamond","Comic Sans MS","Courier New","Georgia","Lucida Console","Tahoma"],Menus.prototype.init=function(){var e=this.editorUi.editor.graph,t=mxUtils.bind(e,e.isEnabled);this.customFonts=[],this.customFontSizes=[],this.put("fontFamily",new Menu(mxUtils.bind(this,function(t,n){for(var i=mxUtils.bind(this,function(i){this.styleChange(t,i,[mxConstants.STYLE_FONTFAMILY],[i],null,n,function(){document.execCommand("fontname",!1,i)},function(){e.updateLabelElements(e.getSelectionCells(),function(t){t.removeAttribute("face"),t.style.fontFamily=null,"PRE"==t.nodeName&&e.replaceElement(t,"div")})}).firstChild.nextSibling.style.fontFamily=i}),l=0;l<this.defaultFonts.length;l++)i(this.defaultFonts[l]);if(t.addSeparator(n),this.customFonts.length>0){for(var l=0;l<this.customFonts.length;l++)i(this.customFonts[l]);t.addSeparator(n),t.addItem(mxResources.get("reset"),null,mxUtils.bind(this,function(){this.customFonts=[],this.editorUi.fireEvent(new mxEventObject("customFontsChanged"))}),n),t.addSeparator(n)}this.promptChange(t,mxResources.get("custom")+"...","",mxConstants.DEFAULT_FONTFAMILY,mxConstants.STYLE_FONTFAMILY,n,!0,mxUtils.bind(this,function(e){0>mxUtils.indexOf(this.customFonts,e)&&(this.customFonts.push(e),this.editorUi.fireEvent(new mxEventObject("customFontsChanged")))}))}))),this.put("formatBlock",new Menu(mxUtils.bind(this,function(t,n){function i(i,l){return t.addItem(i,null,mxUtils.bind(this,function(){null!=e.cellEditor.textarea&&(e.cellEditor.textarea.focus(),document.execCommand("formatBlock",!1,"<"+l+">"))}),n)}i(mxResources.get("normal"),"p"),i("","h1").firstChild.nextSibling.innerHTML='<h1 style="margin:0px;">'+mxResources.get("heading")+" 1</h1>",i("","h2").firstChild.nextSibling.innerHTML='<h2 style="margin:0px;">'+mxResources.get("heading")+" 2</h2>",i("","h3").firstChild.nextSibling.innerHTML='<h3 style="margin:0px;">'+mxResources.get("heading")+" 3</h3>",i("","h4").firstChild.nextSibling.innerHTML='<h4 style="margin:0px;">'+mxResources.get("heading")+" 4</h4>",i("","h5").firstChild.nextSibling.innerHTML='<h5 style="margin:0px;">'+mxResources.get("heading")+" 5</h5>",i("","h6").firstChild.nextSibling.innerHTML='<h6 style="margin:0px;">'+mxResources.get("heading")+" 6</h6>",i("","pre").firstChild.nextSibling.innerHTML='<pre style="margin:0px;">'+mxResources.get("formatted")+"</pre>",i("","blockquote").firstChild.nextSibling.innerHTML='<blockquote style="margin-top:0px;margin-bottom:0px;">'+mxResources.get("blockquote")+"</blockquote>"}))),this.put("fontSize",new Menu(mxUtils.bind(this,function(t,n){for(var i=[6,8,9,10,11,12,14,18,24,36,48,72],l=mxUtils.bind(this,function(i){this.styleChange(t,i,[mxConstants.STYLE_FONTSIZE],[i],null,n,function(){if(null!=e.cellEditor.textarea){document.execCommand("fontSize",!1,"3");for(var t=e.cellEditor.textarea.getElementsByTagName("font"),n=0;n<t.length;n++)if("3"==t[n].getAttribute("size")){t[n].removeAttribute("size"),t[n].style.fontSize=i+"px";break}}})}),o=0;o<i.length;o++)l(i[o]);if(t.addSeparator(n),this.customFontSizes.length>0){for(var o=0;o<this.customFontSizes.length;o++)l(this.customFontSizes[o]);t.addSeparator(n),t.addItem(mxResources.get("reset"),null,mxUtils.bind(this,function(){this.customFontSizes=[]}),n),t.addSeparator(n)}this.promptChange(t,mxResources.get("custom")+"...","(pt)","12",mxConstants.STYLE_FONTSIZE,n,!0,mxUtils.bind(this,function(e){this.customFontSizes.push(e)}))}))),this.put("direction",new Menu(mxUtils.bind(this,function(t,n){t.addItem(mxResources.get("flipH"),null,function(){e.toggleCellStyles(mxConstants.STYLE_FLIPH,!1)},n),t.addItem(mxResources.get("flipV"),null,function(){e.toggleCellStyles(mxConstants.STYLE_FLIPV,!1)},n),this.addMenuItems(t,["-","rotation"],n)}))),this.put("align",new Menu(mxUtils.bind(this,function(t,n){t.addItem(mxResources.get("leftAlign"),null,function(){e.alignCells(mxConstants.ALIGN_LEFT)},n),t.addItem(mxResources.get("center"),null,function(){e.alignCells(mxConstants.ALIGN_CENTER)},n),t.addItem(mxResources.get("rightAlign"),null,function(){e.alignCells(mxConstants.ALIGN_RIGHT)},n),t.addSeparator(n),t.addItem(mxResources.get("topAlign"),null,function(){e.alignCells(mxConstants.ALIGN_TOP)},n),t.addItem(mxResources.get("middle"),null,function(){e.alignCells(mxConstants.ALIGN_MIDDLE)},n),t.addItem(mxResources.get("bottomAlign"),null,function(){e.alignCells(mxConstants.ALIGN_BOTTOM)},n)}))),this.put("distribute",new Menu(mxUtils.bind(this,function(t,n){t.addItem(mxResources.get("horizontal"),null,function(){e.distributeCells(!0)},n),t.addItem(mxResources.get("vertical"),null,function(){e.distributeCells(!1)},n)}))),this.put("layout",new Menu(mxUtils.bind(this,function(t,n){var i=mxUtils.bind(this,function(e,t){var n=new FilenameDialog(this.editorUi,e,mxResources.get("apply"),function(e){t(parseFloat(e))},mxResources.get("spacing"));this.editorUi.showDialog(n.container,300,80,!0,!0),n.init()});t.addItem(mxResources.get("horizontalFlow"),null,mxUtils.bind(this,function(){var t=new mxHierarchicalLayout(e,mxConstants.DIRECTION_WEST);this.editorUi.executeLayout(function(){var n=e.getSelectionCells();t.execute(e.getDefaultParent(),0==n.length?null:n)},!0)}),n),t.addItem(mxResources.get("verticalFlow"),null,mxUtils.bind(this,function(){var t=new mxHierarchicalLayout(e,mxConstants.DIRECTION_NORTH);this.editorUi.executeLayout(function(){var n=e.getSelectionCells();t.execute(e.getDefaultParent(),0==n.length?null:n)},!0)}),n),t.addSeparator(n),t.addItem(mxResources.get("horizontalTree"),null,mxUtils.bind(this,function(){var t=e.getSelectionCell(),n=null;if(null==t||0==e.getModel().getChildCount(t)?0==e.getModel().getEdgeCount(t)&&(n=e.findTreeRoots(e.getDefaultParent())):n=e.findTreeRoots(t),null!=n&&n.length>0&&(t=n[0]),null!=t){var l=new mxCompactTreeLayout(e,!0);l.edgeRouting=!1,l.levelDistance=30,i(l.levelDistance,mxUtils.bind(this,function(n){l.levelDistance=n,this.editorUi.executeLayout(function(){l.execute(e.getDefaultParent(),t)},!0)}))}}),n),t.addItem(mxResources.get("verticalTree"),null,mxUtils.bind(this,function(){var t=e.getSelectionCell(),n=null;if(null==t||0==e.getModel().getChildCount(t)?0==e.getModel().getEdgeCount(t)&&(n=e.findTreeRoots(e.getDefaultParent())):n=e.findTreeRoots(t),null!=n&&n.length>0&&(t=n[0]),null!=t){var l=new mxCompactTreeLayout(e,!1);l.edgeRouting=!1,l.levelDistance=30,i(l.levelDistance,mxUtils.bind(this,function(n){l.levelDistance=n,this.editorUi.executeLayout(function(){l.execute(e.getDefaultParent(),t)},!0)}))}}),n),t.addItem(mxResources.get("radialTree"),null,mxUtils.bind(this,function(){var t=e.getSelectionCell(),n=null;if(null==t||0==e.getModel().getChildCount(t)?0==e.getModel().getEdgeCount(t)&&(n=e.findTreeRoots(e.getDefaultParent())):n=e.findTreeRoots(t),null!=n&&n.length>0&&(t=n[0]),null!=t){var l=new mxRadialTreeLayout(e,!1);l.levelDistance=80,l.autoRadius=!0,i(l.levelDistance,mxUtils.bind(this,function(n){l.levelDistance=n,this.editorUi.executeLayout(function(){l.execute(e.getDefaultParent(),t),!e.isSelectionEmpty()&&(t=e.getModel().getParent(t),e.getModel().isVertex(t)&&e.updateGroupBounds([t],2*e.gridSize,!0))},!0)}))}}),n),t.addSeparator(n),t.addItem(mxResources.get("organic"),null,mxUtils.bind(this,function(){var t=new mxFastOrganicLayout(e);i(t.forceConstant,mxUtils.bind(this,function(n){t.forceConstant=n,this.editorUi.executeLayout(function(){var n=e.getSelectionCell();(null==n||0==e.getModel().getChildCount(n))&&(n=e.getDefaultParent()),t.execute(n),e.getModel().isVertex(n)&&e.updateGroupBounds([n],2*e.gridSize,!0)},!0)}))}),n),t.addItem(mxResources.get("circle"),null,mxUtils.bind(this,function(){var t=new mxCircleLayout(e);this.editorUi.executeLayout(function(){var n=e.getSelectionCell();(null==n||0==e.getModel().getChildCount(n))&&(n=e.getDefaultParent()),t.execute(n),e.getModel().isVertex(n)&&e.updateGroupBounds([n],2*e.gridSize,!0)},!0)}),n)}))),this.put("navigation",new Menu(mxUtils.bind(this,function(e,t){this.addMenuItems(e,["home","-","exitGroup","enterGroup","-","expand","collapse","-","collapsible"],t)}))),this.put("arrange",new Menu(mxUtils.bind(this,function(e,t){this.addMenuItems(e,["toFront","toBack","-"],t),this.addSubmenu("direction",e,t),this.addMenuItems(e,["turn","-"],t),this.addSubmenu("align",e,t),this.addSubmenu("distribute",e,t),e.addSeparator(t),this.addSubmenu("navigation",e,t),this.addSubmenu("insert",e,t),this.addSubmenu("layout",e,t),this.addMenuItems(e,["-","group","ungroup","removeFromGroup","-","clearWaypoints","autosize"],t)}))).isEnabled=t,this.put("insert",new Menu(mxUtils.bind(this,function(e,t){this.addMenuItems(e,["insertLink","insertImage"],t)}))),this.put("view",new Menu(mxUtils.bind(this,function(e,t){this.addMenuItems(e,(null!=this.editorUi.format?["formatPanel"]:[]).concat(["outline","layers","-","pageView","pageScale","-","scrollbars","tooltips","-","grid","guides","-","connectionArrows","connectionPoints","-","resetView","zoomIn","zoomOut"],t))}))),this.put("viewPanels",new Menu(mxUtils.bind(this,function(e,t){null!=this.editorUi.format&&this.addMenuItems(e,["formatPanel"],t),this.addMenuItems(e,["outline","layers"],t)}))),this.put("viewZoom",new Menu(mxUtils.bind(this,function(t,n){this.addMenuItems(t,["resetView","-"],n);for(var i=[.25,.5,.75,1,1.25,1.5,2,3,4],l=0;l<i.length;l++)!function(i){t.addItem(100*i+"%",null,function(){e.zoomTo(i)},n)}(i[l]);this.addMenuItems(t,["-","fitWindow","fitPageWidth","fitPage","fitTwoPages","-","customZoom"],n)}))),this.put("edit",new Menu(mxUtils.bind(this,function(e,t){this.addMenuItems(e,["undo","redo","-","cut","copy","paste","delete","-","duplicate","-","editData","editTooltip","-","editStyle","-","edit","-","editLink","openLink","-","selectVertices","selectEdges","selectAll","selectNone","-","lockUnlock"])}))),this.put("extras",new Menu(mxUtils.bind(this,function(e,t){this.addMenuItems(e,["copyConnect","collapseExpand","-","editDiagram"])})))},Menus.prototype.put=function(e,t){return this.menus[e]=t,t},Menus.prototype.get=function(e){return this.menus[e]},Menus.prototype.addSubmenu=function(e,t,n,i){var l=this.get(e);if(null!=l){var o=l.isEnabled();if(t.showDisabled||o){var r=t.addItem(i||mxResources.get(e),null,null,n,null,o);this.addMenu(e,t,r)}}},Menus.prototype.addMenu=function(e,t,n){var i=this.get(e);null!=i&&(t.showDisabled||i.isEnabled())&&this.get(e).execute(t,n)},Menus.prototype.addInsertTableCellItem=function(e,t){var n=this.editorUi.editor.graph;this.addInsertTableItem(e,mxUtils.bind(this,function(e,t,i){var l=mxEvent.isControlDown(e)||mxEvent.isMetaDown(e)?n.createCrossFunctionalSwimlane(t,i):n.createTable(t,i,null,null,mxEvent.isShiftDown(e)?"Table":null),o=mxEvent.isAltDown(e)?n.getFreeInsertPoint():n.getCenterInsertPoint(n.getBoundingBoxFromGeometry([l],!0)),r=n.importCells([l],o.x,o.y);null!=r&&r.length>0&&(n.scrollCellToVisible(r[0]),n.setSelectionCells(r))}),t)},Menus.prototype.addInsertTableItem=function(e,t,n){t=null!=t?t:mxUtils.bind(this,function(e,t,n){var i=this.editorUi.editor.graph,l=i.getParentByName(mxEvent.getSource(e),"TD");if(null!=l&&null!=i.cellEditor.textarea){i.getParentByName(l,"TR");for(var o=i.cellEditor.textarea.getElementsByTagName("table"),r=[],a=0;a<o.length;a++)r.push(o[a]);i.container.focus(),i.pasteHtmlAtCaret(function e(t,n){for(var i=["<table>"],l=0;l<t;l++){i.push("<tr>");for(var o=0;o<n;o++)i.push("<td><br></td>");i.push("</tr>")}return i.push("</table>"),i.join("")}(t,n));var s=i.cellEditor.textarea.getElementsByTagName("table");if(s.length==r.length+1){for(var a=s.length-1;a>=0;a--)if(0==a||s[a]!=r[a-1]){i.selectNode(s[a].rows[0].cells[0]);break}}}});var i=this.editorUi.editor.graph,l=null,o=null,r=e.addItem("",null,null,n,null,null,null,!0),a='<img src="'+mxClient.imageBasePath+'/transparent.gif" width="16" height="16"/>';r.firstChild.innerHTML="";var s=function e(t,n){var i=document.createElement("table");i.setAttribute("border","1"),i.style.borderCollapse="collapse",i.style.borderStyle="solid",mxClient.IS_QUIRKS||i.setAttribute("cellPadding","8");for(var l=0;l<5;l++)for(var o=i.insertRow(l),r=0;r<5;r++){var s=o.insertCell(-1);mxClient.IS_QUIRKS&&(s.innerHTML=a)}return i}(5,5);r.firstChild.appendChild(s);var d=document.createElement("div");function u(e){o=i.getParentByName(mxEvent.getSource(e),"TD");var t=!1;if(null!=o){l=i.getParentByName(o,"TR");var n=mxEvent.isMouseEvent(e)?2:4;(function e(t,n,i){for(var l=t.rows.length;l<n;l++)for(var o=t.insertRow(l),r=0;r<t.rows[0].cells.length;r++){var s=o.insertCell(-1);mxClient.IS_QUIRKS&&(s.innerHTML=a)}for(var l=0;l<t.rows.length;l++)for(var o=t.rows[l],r=o.cells.length;r<i;r++){var s=o.insertCell(-1);mxClient.IS_QUIRKS&&(s.innerHTML=a)}})(s,Math.min(20,l.sectionRowIndex+n),Math.min(20,o.cellIndex+n)),d.innerHTML=o.cellIndex+1+"x"+(l.sectionRowIndex+1);for(var r=0;r<s.rows.length;r++)for(var u=s.rows[r],h=0;h<u.cells.length;h++){var c=u.cells[h];r==l.sectionRowIndex&&h==o.cellIndex&&(t="blue"==c.style.backgroundColor),r<=l.sectionRowIndex&&h<=o.cellIndex?c.style.backgroundColor="blue":c.style.backgroundColor="transparent"}}return mxEvent.consume(e),t}d.style.padding="4px",d.style.fontSize=Menus.prototype.defaultFontSize+"px",d.innerHTML="1x1",r.firstChild.appendChild(d),mxEvent.addGestureListeners(s,null,null,mxUtils.bind(this,function(e){var n=u(e);null!=o&&null!=l&&n&&(t(e,l.sectionRowIndex+1,o.cellIndex+1),window.setTimeout(mxUtils.bind(this,function(){this.editorUi.hideCurrentMenu()}),0))})),mxEvent.addListener(s,"mouseover",u)},Menus.prototype.edgeStyleChange=function(e,t,n,i,l,o,r){return e.addItem(t,null,mxUtils.bind(this,function(){var e=this.editorUi.editor.graph;e.stopEditing(!1),e.getModel().beginUpdate();try{for(var t=e.getSelectionCells(),l=[],o=0;o<t.length;o++){var a=t[o];if(e.getModel().isEdge(a)){if(r){var s=e.getCellGeometry(a);null!=s&&((s=s.clone()).points=null,e.getModel().setGeometry(a,s))}for(var d=0;d<n.length;d++)e.setCellStyles(n[d],i[d],[a]);l.push(a)}}this.editorUi.fireEvent(new mxEventObject("styleChanged","keys",n,"values",i,"cells",l))}finally{e.getModel().endUpdate()}}),o,l)},Menus.prototype.styleChange=function(e,t,n,i,l,o,r,a){var s=this.createStyleChangeFunction(n,i);return e.addItem(t,null,mxUtils.bind(this,function(){var e=this.editorUi.editor.graph;null!=r&&e.cellEditor.isContentEditing()?r():s(a)}),o,l)},Menus.prototype.createStyleChangeFunction=function(e,t){return mxUtils.bind(this,function(n){var i=this.editorUi.editor.graph;i.stopEditing(!1),i.getModel().beginUpdate();try{for(var l=i.getSelectionCells(),o=0;o<e.length;o++)if(i.setCellStyles(e[o],t[o],l),e[o]==mxConstants.STYLE_ALIGN&&i.updateLabelElements(l,function(e){e.removeAttribute("align"),e.style.textAlign=null}),e[o]==mxConstants.STYLE_FONTFAMILY)for(var r=0;r<l.length;r++)0==i.model.getChildCount(l[r])&&i.autoSizeCell(l[r],!1);null!=n&&n(),this.editorUi.fireEvent(new mxEventObject("styleChanged","keys",e,"values",t,"cells",l))}finally{i.getModel().endUpdate()}})},Menus.prototype.promptChange=function(e,t,n,i,l,o,r,a,s){return e.addItem(t,null,mxUtils.bind(this,function(){var e=this.editorUi.editor.graph,t=i,o=e.getView().getState(e.getSelectionCell());null!=o&&(t=o.style[l]||t);var r=new FilenameDialog(this.editorUi,t,mxResources.get("apply"),mxUtils.bind(this,function(t){if(null!=t&&t.length>0){e.getModel().beginUpdate();try{e.stopEditing(!1),e.setCellStyles(l,t)}finally{e.getModel().endUpdate()}null!=a&&a(t)}}),mxResources.get("enterValue")+(n.length>0?" "+n:""));this.editorUi.showDialog(r.container,300,80,!0,!0),r.init()}),o,s,r)},Menus.prototype.pickColor=function(e,t,n){var i=this.editorUi.editor.graph,l=226+(Math.ceil(ColorDialog.prototype.presetColors.length/12)+Math.ceil(ColorDialog.prototype.defaultColors.length/12))*17;if(null!=t&&i.cellEditor.isContentEditing()){var o=i.cellEditor.saveSelection(),r=new ColorDialog(this.editorUi,n||"000000",mxUtils.bind(this,function(e){i.cellEditor.restoreSelection(o),document.execCommand(t,!1,e!=mxConstants.NONE?e:"transparent")}),function(){i.cellEditor.restoreSelection(o)});this.editorUi.showDialog(r.container,230,l,!0,!0),r.init()}else{null==this.colorDialog&&(this.colorDialog=new ColorDialog(this.editorUi)),this.colorDialog.currentColorKey=e;var a=i.getView().getState(i.getSelectionCell()),s="none";null!=a&&(s=a.style[e]||s),"none"==s?(s="ffffff",this.colorDialog.picker.fromString("ffffff"),this.colorDialog.colorInput.value="none"):this.colorDialog.picker.fromString(s),this.editorUi.showDialog(this.colorDialog.container,230,l,!0,!0),this.colorDialog.init()}},Menus.prototype.toggleStyle=function(e,t){var n=this.editorUi.editor.graph,i=n.toggleCellStyles(e,t);this.editorUi.fireEvent(new mxEventObject("styleChanged","keys",[e],"values",[i],"cells",n.getSelectionCells()))},Menus.prototype.addMenuItem=function(e,t,n,i,l,o){var r=this.editorUi.actions.get(t);if(null!=r&&(e.showDisabled||r.isEnabled())&&r.visible){var a=e.addItem(o||r.label,null,function(){r.funct(i)},n,l,r.isEnabled());return r.toggleAction&&r.isSelected()&&e.addCheckmark(a,Editor.checkmarkImage),this.addShortcut(a,r),a}return null},Menus.prototype.addShortcut=function(e,t){if(null!=t.shortcut){var n=e.firstChild.nextSibling.nextSibling,i=document.createElement("span");i.style.color="gray",mxUtils.write(i,t.shortcut),n.appendChild(i)}},Menus.prototype.addMenuItems=function(e,t,n,i,l){for(var o=0;o<t.length;o++)"-"==t[o]?e.addSeparator(n):this.addMenuItem(e,t[o],n,i,null!=l?l[o]:null)},Menus.prototype.createPopupMenu=function(e,t,n){e.smartSeparators=!0,this.addPopupMenuHistoryItems(e,t,n),this.addPopupMenuEditItems(e,t,n),this.addPopupMenuStyleItems(e,t,n),this.addPopupMenuArrangeItems(e,t,n),this.addPopupMenuCellItems(e,t,n),this.addPopupMenuSelectionItems(e,t,n)},Menus.prototype.addPopupMenuHistoryItems=function(e,t,n){this.editorUi.editor.graph.isSelectionEmpty()&&this.addMenuItems(e,["undo","redo"],null,n)},Menus.prototype.addPopupMenuEditItems=function(e,t,n){this.editorUi.editor.graph.isSelectionEmpty()?this.addMenuItems(e,["pasteHere"],null,n):this.addMenuItems(e,["delete","-","cut","copy","-","duplicate"],null,n)},Menus.prototype.addPopupMenuStyleItems=function(e,t,n){1==this.editorUi.editor.graph.getSelectionCount()?this.addMenuItems(e,["-","setAsDefaultStyle"],null,n):this.editorUi.editor.graph.isSelectionEmpty()&&this.addMenuItems(e,["-","clearDefaultStyle"],null,n)},Menus.prototype.addPopupMenuArrangeItems=function(e,t,n){var i=this.editorUi.editor.graph;i.isSelectionEmpty()||this.addMenuItems(e,["-","toFront","toBack"],null,n),i.getSelectionCount()>1?this.addMenuItems(e,["-","group"],null,n):1==i.getSelectionCount()&&!i.getModel().isEdge(t)&&!i.isSwimlane(t)&&i.getModel().getChildCount(t)>0&&this.addMenuItems(e,["-","ungroup"],null,n)},Menus.prototype.addPopupMenuCellItems=function(e,t,n){var i=this.editorUi.editor.graph;t=i.getSelectionCell();var l=i.view.getState(t);if(e.addSeparator(),null!=l){var o=!1;if(i.getModel().isEdge(t)&&"entityRelationEdgeStyle"!=mxUtils.getValue(l.style,mxConstants.STYLE_EDGE,null)&&"arrow"!=mxUtils.getValue(l.style,mxConstants.STYLE_SHAPE,null)){var r=i.selectionCellsHandler.getHandler(t),a=!1;if(r instanceof mxEdgeHandler&&null!=r.bends&&r.bends.length>2){var s=r.getHandleForEvent(i.updateMouseEvent(new mxMouseEvent(n))),d=this.editorUi.actions.get("removeWaypoint");d.handler=r,d.index=s,a=s>0&&s<r.bends.length-1}e.addSeparator(),this.addMenuItem(e,"turn",null,n,null,mxResources.get("reverse")),this.addMenuItems(e,[a?"removeWaypoint":"addWaypoint"],null,n);var u=i.getModel().getGeometry(t);o=null!=u&&null!=u.points&&u.points.length>0}1==i.getSelectionCount()&&(o||i.getModel().isVertex(t)&&i.getModel().getEdgeCount(t)>0)&&this.addMenuItems(e,["-","clearWaypoints"],null,n),1==i.getSelectionCount()&&(this.addMenuItems(e,["-","editStyle","editData","editLink"],null,n),i.getModel().isVertex(t)&&null!=mxUtils.getValue(l.style,mxConstants.STYLE_IMAGE,null)&&(e.addSeparator(),this.addMenuItem(e,"image",null,n).firstChild.nextSibling.innerHTML=mxResources.get("editImage")+"..."))}},Menus.prototype.addPopupMenuSelectionItems=function(e,t,n){this.editorUi.editor.graph.isSelectionEmpty()&&this.addMenuItems(e,["-","selectVertices","selectEdges","selectAll"],null,n)},Menus.prototype.createMenubar=function(e){for(var t=new Menubar(this.editorUi,e),n=this.defaultMenuItems,i=0;i<n.length;i++)mxUtils.bind(this,function(e){var l=t.addMenu(mxResources.get(n[i]),mxUtils.bind(this,function(){e.funct.apply(this,arguments)}));this.menuCreated(e,l)})(this.get(n[i]));return t},Menus.prototype.menuCreated=function(e,t,n){null!=t&&(n=null!=n?n:"geItem",e.addListener("stateChanged",function(){t.enabled=e.enabled,e.enabled?(t.className=n,8==document.documentMode&&(t.style.color="")):(t.className=n+" mxDisabled",8==document.documentMode&&(t.style.color="#c3c3c3"))}))},Menubar.prototype.hideMenu=function(){this.editorUi.hideCurrentMenu()},Menubar.prototype.addMenu=function(e,t,n){var i=document.createElement("a");return i.className="geItem",mxUtils.write(i,e),this.addMenuHandler(i,t),null!=n?this.container.insertBefore(i,n):this.container.appendChild(i),i},Menubar.prototype.addMenuHandler=function(e,t){if(null!=t){var n=!0,i=mxUtils.bind(this,function(i){if(n&&null==e.enabled||e.enabled){this.editorUi.editor.graph.popupMenuHandler.hideMenu();var l=new mxPopupMenu(t);l.div.className+=" geMenubarMenu",l.smartSeparators=!0,l.showDisabled=!0,l.autoExpand=!0,l.hideMenu=mxUtils.bind(this,function(){mxPopupMenu.prototype.hideMenu.apply(l,arguments),this.editorUi.resetCurrentMenu(),l.destroy()});var o=mxUtils.getOffset(e);l.popup(o.x,o.y+e.offsetHeight,null,i),this.editorUi.setCurrentMenu(l,e)}mxEvent.consume(i)});mxEvent.addListener(e,"mousemove",mxUtils.bind(this,function(t){null!=this.editorUi.currentMenu&&this.editorUi.currentMenuElt!=e&&(this.editorUi.hideCurrentMenu(),i(t))})),mxEvent.addListener(e,mxClient.IS_POINTER?"pointerdown":"mousedown",mxUtils.bind(this,function(t){n=this.currentElt!=e,t.preventDefault()})),mxEvent.addListener(e,"click",mxUtils.bind(this,function(e){i(e),n=!0}))}},Menubar.prototype.destroy=function(){},mxUtils.extend(Menu,mxEventSource),Menu.prototype.isEnabled=function(){return this.enabled},Menu.prototype.setEnabled=function(e){this.enabled!=e&&(this.enabled=e,this.fireEvent(new mxEventObject("stateChanged")))},Menu.prototype.execute=function(e,t){this.funct(e,t)},EditorUi.prototype.createMenus=function(){return new Menus(this)};