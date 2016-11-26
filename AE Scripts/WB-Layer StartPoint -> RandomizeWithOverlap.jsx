/**
* @@@BUILDINFO@@@ WB-Layer StartPoint -> RandomizeWithOverlap.jsx !Version! Tue Jul 22 2014 01:06:07 GMT+0200
* (C) Leon Berenschot Wendbaar.nl 2014
*/
 

{
    var effectsGroup = app.project.activeItem.selectedLayers;
    var memo = [];
    var totalCompositionDuration = app.project.activeItem.duration;
    for (var i = 0; i < effectsGroup.length; i++){
        var mySelectedLayer = effectsGroup[i];
        var layerDuration = effectsGroup[i] .outPoint - effectsGroup[i] .inPoint
        var newPosition = generateRandomNumber() * (totalCompositionDuration);
        effectsGroup[i] .startTime = newPosition;
        if (newPosition > (totalCompositionDuration - layerDuration)) {
            var newLayer = effectsGroup[i].duplicate();            
            newLayer .startTime = newPosition - totalCompositionDuration;
            newLayer . name = newLayer . name + ' -dup';
        }
    }
//~     for (var i = 0; i < memo.length; i++){
//~         effectsGroup[i] .startTime = memo[i] - totalCompositionDuration ;
//~     }
    
//~     var tippingPoint = effectsGroup.length / 3 * 2
//~     for (var i = 0; i < effectsGroup.length; i++){
//~         if (i > tippingPoint) {
//~             effectsGroup[i] .startTime = memo[i - tippingPoint];
//~         } else {
//~             effectsGroup[i] .startTime = memo[i];
//~         }
//~     }
}
