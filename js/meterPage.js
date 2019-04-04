(function () {
    var dom = document.getElementById("speed");
    var myChart = echarts.init(dom);
    var app = {};
    option1 = null;
    option1 = {
        series : [
            {
                name: '速度',
                type: 'gauge',
                z: 3,
                min: 0,
                max: 220,
                splitNumber: 11,
                center: ['50%', '55%'],
                radius: '95%',
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.09, '#00ff00'],[0.82, '#1eccff'],[1, '#ff4500']],
                        width: 3,
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {            // 坐标轴小标记
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length :15,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                splitLine: {           // 分隔线
                    length :25,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width:3,
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {           // 分隔线
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 5
                },
                title : {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 18,
                    fontStyle: 'italic',
                    color: '#fff',
                    shadowColor: '#fff',
                    shadowBlur: 10
                },
                detail : {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    formatter: function (value) {
                        value = (value + '').split('.');
                        value.length < 2 && (value.push('00'));
                        return ('00' + value[0]).slice(-2)
                            + '.' + (value[1] + '00').slice(0, 2);
                    },
                    fontWeight: 'bolder',
                    borderRadius: 5,
                    backgroundColor: '#333',
                    borderColor: '#fff',
                    shadowBlur: 5,
                    shadowColor: '#fff',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    borderWidth: 2,
                    textBorderColor: '#000',
                    textBorderWidth: 1,
                    textShadowBlur: 1,
                    textShadowColor: '#fff',
                    textShadowOffsetX: 0,
                    textShadowOffsetY: 0,
                    fontFamily: 'Arial',
                    width: 90,
                    color: '#eee',
                    rich: {}
                },
                data:[{value: 40, name: 'km/h'}]
            }
        ]
    };

    setInterval(function (){
        option1.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
        myChart.setOption(option1,true);
    },2000);
    if (option1 && typeof option1 === "object") {
        myChart.setOption(option1, true);
    }
}());

(function () {
    var dom = document.getElementById("r-speed");
    var myChart = echarts.init(dom);
    var app = {};
    option2 = null;
    option2 = {
        series : [
            {
                name: '转速',
                type: 'gauge',
                center: ['53%', '55%'],    // 默认全局居中
                radius: '85%',
                min:0,
                max:7,
                endAngle:45,
                splitNumber:7,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.29, '#00ff00'],[0.86, '#1eccff'],[1, '#ff4500']],
                        width: 2,
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {            // 坐标轴小标记
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length :12,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                splitLine: {           // 分隔线
                    length :20,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width:3,
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {
                    width:5,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 5
                },
                title : {
                    offsetCenter: [0, '-30%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontStyle: 'italic',
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                detail: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 600,
                    fontSize: 20,
                    color: '#fff'
                },
                data:[{value: 1.5, name: 'x1000 r/min'}]
            }
        ]
    };

    setInterval(function (){
        option2.series[0].data[0].value = (Math.random()*7).toFixed(2) - 0;
        myChart.setOption(option2,true);
    },2000);
    if (option2 && typeof option2 === "object") {
        myChart.setOption(option2, true);
    }
}());

(function () {
    var dom = document.getElementById("fuel");
    var myChart = echarts.init(dom);
    var app = {};
    option3 = null;
    option3 = {
        series : [
            {
                name: '油表',
                type: 'gauge',
                center: ['50%', '50%'],    // 默认全局居中
                radius: '70%',
                min: 0,
                max: 2,
                startAngle: 135,
                endAngle: 45,
                splitNumber: 2,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.2, '#00ff00'],[0.8, '#1eccff'],[1, '#ff4500']],
                        width: 2,
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length :12,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    },
                    formatter:function(v){
                        switch (v + '') {
                            case '0' : return 'E';
                            case '1' : return 'Gas';
                            case '2' : return 'F';
                        }
                    }
                },
                splitLine: {           // 分隔线
                    length :15,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width:3,
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {
                    width:2,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 5
                },
                title : {
                    show: false
                },
                detail : {
                    show: false
                },
                data:[{value: 0.5, name: 'gas'}]
            },
            {
                name: '水表',
                type: 'gauge',
                center : ['50%', '50%'],    // 默认全局居中
                radius : '70%',
                min: 0,
                max: 2,
                startAngle: 315,
                endAngle: 225,
                splitNumber: 2,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.2, '#00ff00'],[0.8, '#1eccff'],[1, '#ff4500']],
                        width: 2,
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    show: false
                },
                axisLabel: {
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    },
                    formatter:function(v){
                        switch (v + '') {
                            case '0' : return 'H';
                            case '1' : return 'Water';
                            case '2' : return 'C';
                        }
                    }
                },
                splitLine: {           // 分隔线
                    length :15,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width:3,
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {
                    width:2,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 5
                },
                title: {
                    show: false
                },
                detail: {
                    show: false
                },
                data:[{value: 0.5, name: 'gas'}]
            }
        ]
    };

    setInterval(function (){
        option3.series[0].data[0].value = (Math.random()*2).toFixed(2) - 0;
        option3.series[1].data[0].value = (Math.random()*2).toFixed(2) - 0;
        myChart.setOption(option3,true);
    },2000);
    if (option3 && typeof option3 === "object") {
        myChart.setOption(option3, true);
    }
}());