$(document).ready(function(){
        sales_chart();
});

function sales_chart(){
        
        var chart_bar = echarts.init(document.getElementById('sales_chart'));

        var xaxis = new Array();
        var yaxis = new Array();

        yaxis.push(50000);
        xaxis.push("10:00~11:00");

        yaxis.push(20000);
        xaxis.push("12:00~13:00");

        yaxis.push(30000);
        xaxis.push("14:00~15:00");

        yaxis.push(40000);
        xaxis.push("16:00~17:00");

        yaxis.push(50000);
        xaxis.push("18:00~19:00");

        yaxis.push(15000);
        xaxis.push("20:00~21:00");

        var option_bar = ({
            calculable:true,
            xAxis:[{
                    type:'category',
                    data:xaxis
            }],
            yAxis:[{
                    type:'value',
                    name:'数量'
            }],
            series:[{
                    name:'数量',
                    type:'bar',
                    data:yaxis
            }]
        });
        chart_bar.setOption(option_bar);
}

