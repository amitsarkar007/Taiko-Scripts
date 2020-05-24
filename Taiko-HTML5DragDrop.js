async function html5dragAndDrop(source, target) {
  const arguments = { args: {source, target}};
  await evaluate((_, args) => {
    const sourceElement = document.querySelector(args.source);
    const targetElement = document.querySelector(args.target);
    
    const dataTransfer = new DataTransfer();
  
    const dragStartEvent = document.createEvent("CustomEvent");
    dragStartEvent.dataTransfer = dataTransfer;
    dragStartEvent.initCustomEvent("dragstart", true, true, null);
    dragStartEvent.clientX = sourceElement.getBoundingClientRect().top;
    dragStartEvent.clientY = sourceElement.getBoundingClientRect().left;
    sourceElement.dispatchEvent(dragStartEvent);

    const dropEvent = document.createEvent("CustomEvent");
    dropEvent.dataTransfer = dataTransfer;
    dropEvent.initCustomEvent("drop", true, true, null);
    dropEvent.clientX = targetElement.getBoundingClientRect().top;
    dropEvent.clientY = targetElement.getBoundingClientRect().left;
    targetElement.dispatchEvent(dropEvent);

    const dragEndEvent = document.createEvent("CustomEvent");
    dragEndEvent.dataTransfer = dataTransfer;
    dragEndEvent.initCustomEvent("dragend", true, true, null);
    dragEndEvent.clientX = targetElement.getBoundingClientRect().top;
    dragEndEvent.clientY = targetElement.getBoundingClientRect().left;
    sourceElement.dispatchEvent(dragEndEvent);
  },arguments);
}

(async () => {
  await openBrowser({headless:false});
  await goto("http://the-internet.herokuapp.com/drag_and_drop");
  await html5dragAndDrop("#column-a", "#column-b");
  await closeBrowser();
})();