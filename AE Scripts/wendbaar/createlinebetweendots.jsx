/*
 * (C) Leon Berenschot Wendbaar.nl 2016
 */

{

    var effectsGroup = app.project.activeItem.selectedLayers;
    // for (var i = 0; i < effectsGroup.length; i++) {
    //     $.writeln(effectsGroup[i].name);
    //     $.writeln(effectsGroup[i].effect('Wiggle - position').property('Wiggle Speed (wigs/sec)').expression);
    //     effectsGroup[i].effect('Wiggle - position').property('Wiggle Speed (wigs/sec)').expression = 'thisComp.layer("control").effect("wiggle-sec")("Slider")';
    //     effectsGroup[i].effect('Wiggle - position').property('Wiggle Amount (pixels)').expression = 'thisComp.layer("control").effect("wiggle-size")("Slider")';
    //
    //
    //     // var start = effectsGroup[i].effect('Beam').property('Starting Point').expression
    //     // // thisComp.layer("Dot 05")
    //     // var str = start.substr(0,24);
    //     // effectsGroup[i].effect('Beam').property('Starting Point').expression = str + '.position + ' + str + '.effect("(Transform)")("Position") - ' + str + '.effect("(Transform)")("Anchor Point")';
    //     //
    //     // var stop = effectsGroup[i].effect('Beam').property('Ending Point').expression
    //     // // thisComp.layer("Dot 05")
    //     // var str = stop.substr(0,24);
    //     // effectsGroup[i].effect('Beam').property('Ending Point').expression = str + '.position + ' + str + '.effect("(Transform)")("Position") - ' + str + '.effect("(Transform)")("Anchor Point")';
    // }

    if (effectsGroup.length == 2) {
        var defaultLine = app.project.activeItem.layers.byName('line').duplicate();
        var name1 = effectsGroup[0].name;
        var name2 = effectsGroup[1].name;
        // when there is an wiggle applied
        defaultLine.effect('Beam').property("Starting Point").expression = 'thisComp.layer("' + name1 + '").position + thisComp.layer("' + name1 + '").effect("(Transform)")("Position") - thisComp.layer("' + name1 + '").effect("(Transform)")("Anchor Point")';
        defaultLine.effect('Beam').property("Ending Point").expression   = 'thisComp.layer("' + name2 + '").position + thisComp.layer("' + name2 + '").effect("(Transform)")("Position") - thisComp.layer("' + name2 + '").effect("(Transform)")("Anchor Point")';

        // defaultLine.effect('Beam').property("Starting Point").expression = 'thisComp.layer("' + point1 + '").position';
        // defaultLine.effect('Beam').property("Ending Point").expression = 'thisComp.layer("' + point2 + '").position';
    } else{
        $.writeln('select 2 dots');
    }
}
