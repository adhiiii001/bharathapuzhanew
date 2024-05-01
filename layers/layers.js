var wms_layers = [];

var format_Bharathapuzha_0 = new ol.format.GeoJSON();
var features_Bharathapuzha_0 = format_Bharathapuzha_0.readFeatures(json_Bharathapuzha_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bharathapuzha_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bharathapuzha_0.addFeatures(features_Bharathapuzha_0);
var lyr_Bharathapuzha_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bharathapuzha_0, 
                style: style_Bharathapuzha_0,
                popuplayertitle: "Bharathapuzha",
                interactive: true,
                title: '<img src="styles/legend/Bharathapuzha_0.png" /> Bharathapuzha'
            });
var format_Block1_1 = new ol.format.GeoJSON();
var features_Block1_1 = format_Block1_1.readFeatures(json_Block1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Block1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Block1_1.addFeatures(features_Block1_1);
var lyr_Block1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Block1_1, 
                style: style_Block1_1,
                popuplayertitle: "Block1",
                interactive: true,
                title: '<img src="styles/legend/Block1_1.png" /> Block1'
            });
var format_Dam_2 = new ol.format.GeoJSON();
var features_Dam_2 = format_Dam_2.readFeatures(json_Dam_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dam_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dam_2.addFeatures(features_Dam_2);
var lyr_Dam_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dam_2, 
                style: style_Dam_2,
                popuplayertitle: "Dam",
                interactive: true,
                title: '<img src="styles/legend/Dam_2.png" /> Dam'
            });
var format_Dam1_3 = new ol.format.GeoJSON();
var features_Dam1_3 = format_Dam1_3.readFeatures(json_Dam1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dam1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dam1_3.addFeatures(features_Dam1_3);
var lyr_Dam1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dam1_3, 
                style: style_Dam1_3,
                popuplayertitle: "Dam1",
                interactive: true,
                title: '<img src="styles/legend/Dam1_3.png" /> Dam1'
            });
var format_Railway_4 = new ol.format.GeoJSON();
var features_Railway_4 = format_Railway_4.readFeatures(json_Railway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railway_4.addFeatures(features_Railway_4);
var lyr_Railway_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Railway_4, 
                style: style_Railway_4,
                popuplayertitle: "Railway",
                interactive: true,
                title: '<img src="styles/legend/Railway_4.png" /> Railway'
            });
var format_Road_5 = new ol.format.GeoJSON();
var features_Road_5 = format_Road_5.readFeatures(json_Road_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_5.addFeatures(features_Road_5);
var lyr_Road_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Road_5, 
                style: style_Road_5,
                popuplayertitle: "Road",
                interactive: true,
                title: '<img src="styles/legend/Road_5.png" /> Road'
            });
var format_Road1_6 = new ol.format.GeoJSON();
var features_Road1_6 = format_Road1_6.readFeatures(json_Road1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road1_6.addFeatures(features_Road1_6);
var lyr_Road1_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Road1_6, 
                style: style_Road1_6,
                popuplayertitle: "Road1",
                interactive: true,
                title: '<img src="styles/legend/Road1_6.png" /> Road1'
            });

lyr_Bharathapuzha_0.setVisible(true);lyr_Block1_1.setVisible(true);lyr_Dam_2.setVisible(true);lyr_Dam1_3.setVisible(true);lyr_Railway_4.setVisible(true);lyr_Road_5.setVisible(true);lyr_Road1_6.setVisible(true);
var layersList = [lyr_Bharathapuzha_0,lyr_Block1_1,lyr_Dam_2,lyr_Dam1_3,lyr_Railway_4,lyr_Road_5,lyr_Road1_6];
lyr_Bharathapuzha_0.set('fieldAliases', {'AREA': 'AREA', 'Rank': 'Rank', });
lyr_Block1_1.set('fieldAliases', {'Id': 'Id', 'NAME': 'NAME', });
lyr_Dam_2.set('fieldAliases', {'name1': 'name1', 'Photo': 'Photo', });
lyr_Dam1_3.set('fieldAliases', {'name1': 'name1', 'Photo': 'Photo', });
lyr_Railway_4.set('fieldAliases', {'FID_rail_d': 'FID_rail_d', 'F_CODE_DES': 'F_CODE_DES', 'EXS_DESCRI': 'EXS_DESCRI', 'FCO_DESCRI': 'FCO_DESCRI', 'FID_countr': 'FID_countr', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', });
lyr_Road_5.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_Road1_6.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_Bharathapuzha_0.set('fieldImages', {'AREA': '', 'Rank': '', });
lyr_Block1_1.set('fieldImages', {'Id': '', 'NAME': '', });
lyr_Dam_2.set('fieldImages', {'name1': '', 'Photo': '', });
lyr_Dam1_3.set('fieldImages', {'name1': '', 'Photo': '', });
lyr_Railway_4.set('fieldImages', {'FID_rail_d': '', 'F_CODE_DES': '', 'EXS_DESCRI': '', 'FCO_DESCRI': '', 'FID_countr': '', 'ISO': '', 'ISOCOUNTRY': '', });
lyr_Road_5.set('fieldImages', {'NAME': '', 'Length': '', });
lyr_Road1_6.set('fieldImages', {'NAME': '', 'Length': '', });
lyr_Bharathapuzha_0.set('fieldLabels', {'AREA': 'no label', 'Rank': 'no label', });
lyr_Block1_1.set('fieldLabels', {'Id': 'no label', 'NAME': 'no label', });
lyr_Dam_2.set('fieldLabels', {'name1': 'no label', 'Photo': 'no label', });
lyr_Dam1_3.set('fieldLabels', {'name1': 'no label', 'Photo': 'no label', });
lyr_Railway_4.set('fieldLabels', {'FID_rail_d': 'no label', 'F_CODE_DES': 'no label', 'EXS_DESCRI': 'no label', 'FCO_DESCRI': 'no label', 'FID_countr': 'no label', 'ISO': 'no label', 'ISOCOUNTRY': 'no label', });
lyr_Road_5.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_Road1_6.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_Road1_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});