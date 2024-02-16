/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 313.0, "minX": 0.0, "maxY": 9555.0, "series": [{"data": [[0.0, 313.0], [0.1, 313.0], [0.2, 313.0], [0.3, 313.0], [0.4, 313.0], [0.5, 320.0], [0.6, 320.0], [0.7, 320.0], [0.8, 320.0], [0.9, 320.0], [1.0, 324.0], [1.1, 324.0], [1.2, 324.0], [1.3, 324.0], [1.4, 324.0], [1.5, 591.0], [1.6, 591.0], [1.7, 591.0], [1.8, 591.0], [1.9, 591.0], [2.0, 640.0], [2.1, 640.0], [2.2, 640.0], [2.3, 640.0], [2.4, 640.0], [2.5, 640.0], [2.6, 640.0], [2.7, 640.0], [2.8, 640.0], [2.9, 640.0], [3.0, 646.0], [3.1, 646.0], [3.2, 646.0], [3.3, 646.0], [3.4, 646.0], [3.5, 850.0], [3.6, 850.0], [3.7, 850.0], [3.8, 850.0], [3.9, 850.0], [4.0, 923.0], [4.1, 923.0], [4.2, 923.0], [4.3, 923.0], [4.4, 923.0], [4.5, 923.0], [4.6, 923.0], [4.7, 923.0], [4.8, 923.0], [4.9, 923.0], [5.0, 928.0], [5.1, 928.0], [5.2, 928.0], [5.3, 928.0], [5.4, 928.0], [5.5, 1077.0], [5.6, 1077.0], [5.7, 1077.0], [5.8, 1077.0], [5.9, 1077.0], [6.0, 1153.0], [6.1, 1153.0], [6.2, 1153.0], [6.3, 1153.0], [6.4, 1153.0], [6.5, 1156.0], [6.6, 1156.0], [6.7, 1156.0], [6.8, 1156.0], [6.9, 1156.0], [7.0, 1162.0], [7.1, 1162.0], [7.2, 1162.0], [7.3, 1162.0], [7.4, 1162.0], [7.5, 1300.0], [7.6, 1300.0], [7.7, 1300.0], [7.8, 1300.0], [7.9, 1300.0], [8.0, 1378.0], [8.1, 1378.0], [8.2, 1378.0], [8.3, 1378.0], [8.4, 1378.0], [8.5, 1391.0], [8.6, 1391.0], [8.7, 1391.0], [8.8, 1391.0], [8.9, 1391.0], [9.0, 1400.0], [9.1, 1400.0], [9.2, 1400.0], [9.3, 1400.0], [9.4, 1400.0], [9.5, 1439.0], [9.6, 1439.0], [9.7, 1439.0], [9.8, 1439.0], [9.9, 1439.0], [10.0, 1519.0], [10.1, 1519.0], [10.2, 1519.0], [10.3, 1519.0], [10.4, 1519.0], [10.5, 1603.0], [10.6, 1603.0], [10.7, 1603.0], [10.8, 1603.0], [10.9, 1603.0], [11.0, 1609.0], [11.1, 1609.0], [11.2, 1609.0], [11.3, 1609.0], [11.4, 1609.0], [11.5, 1621.0], [11.6, 1621.0], [11.7, 1621.0], [11.8, 1621.0], [11.9, 1621.0], [12.0, 1663.0], [12.1, 1663.0], [12.2, 1663.0], [12.3, 1663.0], [12.4, 1663.0], [12.5, 1752.0], [12.6, 1752.0], [12.7, 1752.0], [12.8, 1752.0], [12.9, 1752.0], [13.0, 1827.0], [13.1, 1827.0], [13.2, 1827.0], [13.3, 1827.0], [13.4, 1827.0], [13.5, 1848.0], [13.6, 1848.0], [13.7, 1848.0], [13.8, 1848.0], [13.9, 1848.0], [14.0, 1853.0], [14.1, 1853.0], [14.2, 1853.0], [14.3, 1853.0], [14.4, 1853.0], [14.5, 1899.0], [14.6, 1899.0], [14.7, 1899.0], [14.8, 1899.0], [14.9, 1899.0], [15.0, 1970.0], [15.1, 1970.0], [15.2, 1970.0], [15.3, 1970.0], [15.4, 1970.0], [15.5, 2044.0], [15.6, 2044.0], [15.7, 2044.0], [15.8, 2044.0], [15.9, 2044.0], [16.0, 2077.0], [16.1, 2077.0], [16.2, 2077.0], [16.3, 2077.0], [16.4, 2077.0], [16.5, 2079.0], [16.6, 2079.0], [16.7, 2079.0], [16.8, 2079.0], [16.9, 2079.0], [17.0, 2114.0], [17.1, 2114.0], [17.2, 2114.0], [17.3, 2114.0], [17.4, 2114.0], [17.5, 2203.0], [17.6, 2203.0], [17.7, 2203.0], [17.8, 2203.0], [17.9, 2203.0], [18.0, 2261.0], [18.1, 2261.0], [18.2, 2261.0], [18.3, 2261.0], [18.4, 2261.0], [18.5, 2299.0], [18.6, 2299.0], [18.7, 2299.0], [18.8, 2299.0], [18.9, 2299.0], [19.0, 2302.0], [19.1, 2302.0], [19.2, 2302.0], [19.3, 2302.0], [19.4, 2302.0], [19.5, 2333.0], [19.6, 2333.0], [19.7, 2333.0], [19.8, 2333.0], [19.9, 2333.0], [20.0, 2424.0], [20.1, 2424.0], [20.2, 2424.0], [20.3, 2424.0], [20.4, 2424.0], [20.5, 2491.0], [20.6, 2491.0], [20.7, 2491.0], [20.8, 2491.0], [20.9, 2491.0], [21.0, 2533.0], [21.1, 2533.0], [21.2, 2533.0], [21.3, 2533.0], [21.4, 2533.0], [21.5, 2541.0], [21.6, 2541.0], [21.7, 2541.0], [21.8, 2541.0], [21.9, 2541.0], [22.0, 2575.0], [22.1, 2575.0], [22.2, 2575.0], [22.3, 2575.0], [22.4, 2575.0], [22.5, 2728.0], [22.6, 2728.0], [22.7, 2728.0], [22.8, 2728.0], [22.9, 2728.0], [23.0, 2746.0], [23.1, 2746.0], [23.2, 2746.0], [23.3, 2746.0], [23.4, 2746.0], [23.5, 2758.0], [23.6, 2758.0], [23.7, 2758.0], [23.8, 2758.0], [23.9, 2758.0], [24.0, 2765.0], [24.1, 2765.0], [24.2, 2765.0], [24.3, 2765.0], [24.4, 2765.0], [24.5, 2797.0], [24.6, 2797.0], [24.7, 2797.0], [24.8, 2797.0], [24.9, 2797.0], [25.0, 2952.0], [25.1, 2952.0], [25.2, 2952.0], [25.3, 2952.0], [25.4, 2952.0], [25.5, 2969.0], [25.6, 2969.0], [25.7, 2969.0], [25.8, 2969.0], [25.9, 2969.0], [26.0, 2981.0], [26.1, 2981.0], [26.2, 2981.0], [26.3, 2981.0], [26.4, 2981.0], [26.5, 2990.0], [26.6, 2990.0], [26.7, 2990.0], [26.8, 2990.0], [26.9, 2990.0], [27.0, 3017.0], [27.1, 3017.0], [27.2, 3017.0], [27.3, 3017.0], [27.4, 3017.0], [27.5, 3172.0], [27.6, 3172.0], [27.7, 3172.0], [27.8, 3172.0], [27.9, 3172.0], [28.0, 3197.0], [28.1, 3197.0], [28.2, 3197.0], [28.3, 3197.0], [28.4, 3197.0], [28.5, 3209.0], [28.6, 3209.0], [28.7, 3209.0], [28.8, 3209.0], [28.9, 3209.0], [29.0, 3215.0], [29.1, 3215.0], [29.2, 3215.0], [29.3, 3215.0], [29.4, 3215.0], [29.5, 3233.0], [29.6, 3233.0], [29.7, 3233.0], [29.8, 3233.0], [29.9, 3233.0], [30.0, 3396.0], [30.1, 3396.0], [30.2, 3396.0], [30.3, 3396.0], [30.4, 3396.0], [30.5, 3417.0], [30.6, 3417.0], [30.7, 3417.0], [30.8, 3417.0], [30.9, 3417.0], [31.0, 3437.0], [31.1, 3437.0], [31.2, 3437.0], [31.3, 3437.0], [31.4, 3437.0], [31.5, 3440.0], [31.6, 3440.0], [31.7, 3440.0], [31.8, 3440.0], [31.9, 3440.0], [32.0, 3458.0], [32.1, 3458.0], [32.2, 3458.0], [32.3, 3458.0], [32.4, 3458.0], [32.5, 3662.0], [32.6, 3662.0], [32.7, 3662.0], [32.8, 3662.0], [32.9, 3662.0], [33.0, 3677.0], [33.1, 3677.0], [33.2, 3677.0], [33.3, 3677.0], [33.4, 3677.0], [33.5, 3694.0], [33.6, 3694.0], [33.7, 3694.0], [33.8, 3694.0], [33.9, 3694.0], [34.0, 3695.0], [34.1, 3695.0], [34.2, 3695.0], [34.3, 3695.0], [34.4, 3695.0], [34.5, 3706.0], [34.6, 3706.0], [34.7, 3706.0], [34.8, 3706.0], [34.9, 3706.0], [35.0, 3878.0], [35.1, 3878.0], [35.2, 3878.0], [35.3, 3878.0], [35.4, 3878.0], [35.5, 3901.0], [35.6, 3901.0], [35.7, 3901.0], [35.8, 3901.0], [35.9, 3901.0], [36.0, 3918.0], [36.1, 3918.0], [36.2, 3918.0], [36.3, 3918.0], [36.4, 3918.0], [36.5, 3921.0], [36.6, 3921.0], [36.7, 3921.0], [36.8, 3921.0], [36.9, 3921.0], [37.0, 3933.0], [37.1, 3933.0], [37.2, 3933.0], [37.3, 3933.0], [37.4, 3933.0], [37.5, 4094.0], [37.6, 4094.0], [37.7, 4094.0], [37.8, 4094.0], [37.9, 4094.0], [38.0, 4122.0], [38.1, 4122.0], [38.2, 4122.0], [38.3, 4122.0], [38.4, 4122.0], [38.5, 4144.0], [38.6, 4144.0], [38.7, 4144.0], [38.8, 4144.0], [38.9, 4144.0], [39.0, 4146.0], [39.1, 4146.0], [39.2, 4146.0], [39.3, 4146.0], [39.4, 4146.0], [39.5, 4159.0], [39.6, 4159.0], [39.7, 4159.0], [39.8, 4159.0], [39.9, 4159.0], [40.0, 4341.0], [40.1, 4341.0], [40.2, 4341.0], [40.3, 4341.0], [40.4, 4341.0], [40.5, 4372.0], [40.6, 4372.0], [40.7, 4372.0], [40.8, 4372.0], [40.9, 4372.0], [41.0, 4402.0], [41.1, 4402.0], [41.2, 4402.0], [41.3, 4402.0], [41.4, 4402.0], [41.5, 4406.0], [41.6, 4406.0], [41.7, 4406.0], [41.8, 4406.0], [41.9, 4406.0], [42.0, 4412.0], [42.1, 4412.0], [42.2, 4412.0], [42.3, 4412.0], [42.4, 4412.0], [42.5, 4556.0], [42.6, 4556.0], [42.7, 4556.0], [42.8, 4556.0], [42.9, 4556.0], [43.0, 4594.0], [43.1, 4594.0], [43.2, 4594.0], [43.3, 4594.0], [43.4, 4594.0], [43.5, 4623.0], [43.6, 4623.0], [43.7, 4623.0], [43.8, 4623.0], [43.9, 4623.0], [44.0, 4633.0], [44.1, 4633.0], [44.2, 4633.0], [44.3, 4633.0], [44.4, 4633.0], [44.5, 4636.0], [44.6, 4636.0], [44.7, 4636.0], [44.8, 4636.0], [44.9, 4636.0], [45.0, 4773.0], [45.1, 4773.0], [45.2, 4773.0], [45.3, 4773.0], [45.4, 4773.0], [45.5, 4811.0], [45.6, 4811.0], [45.7, 4811.0], [45.8, 4811.0], [45.9, 4811.0], [46.0, 4851.0], [46.1, 4851.0], [46.2, 4851.0], [46.3, 4851.0], [46.4, 4851.0], [46.5, 4855.0], [46.6, 4855.0], [46.7, 4855.0], [46.8, 4855.0], [46.9, 4855.0], [47.0, 4867.0], [47.1, 4867.0], [47.2, 4867.0], [47.3, 4867.0], [47.4, 4867.0], [47.5, 4990.0], [47.6, 4990.0], [47.7, 4990.0], [47.8, 4990.0], [47.9, 4990.0], [48.0, 5025.0], [48.1, 5025.0], [48.2, 5025.0], [48.3, 5025.0], [48.4, 5025.0], [48.5, 5072.0], [48.6, 5072.0], [48.7, 5072.0], [48.8, 5072.0], [48.9, 5072.0], [49.0, 5076.0], [49.1, 5076.0], [49.2, 5076.0], [49.3, 5076.0], [49.4, 5076.0], [49.5, 5087.0], [49.6, 5087.0], [49.7, 5087.0], [49.8, 5087.0], [49.9, 5087.0], [50.0, 5206.0], [50.1, 5206.0], [50.2, 5206.0], [50.3, 5206.0], [50.4, 5206.0], [50.5, 5244.0], [50.6, 5244.0], [50.7, 5244.0], [50.8, 5244.0], [50.9, 5244.0], [51.0, 5291.0], [51.1, 5291.0], [51.2, 5291.0], [51.3, 5291.0], [51.4, 5291.0], [51.5, 5299.0], [51.6, 5299.0], [51.7, 5299.0], [51.8, 5299.0], [51.9, 5299.0], [52.0, 5317.0], [52.1, 5317.0], [52.2, 5317.0], [52.3, 5317.0], [52.4, 5317.0], [52.5, 5436.0], [52.6, 5436.0], [52.7, 5436.0], [52.8, 5436.0], [52.9, 5436.0], [53.0, 5473.0], [53.1, 5473.0], [53.2, 5473.0], [53.3, 5473.0], [53.4, 5473.0], [53.5, 5507.0], [53.6, 5507.0], [53.7, 5507.0], [53.8, 5507.0], [53.9, 5507.0], [54.0, 5518.0], [54.1, 5518.0], [54.2, 5518.0], [54.3, 5518.0], [54.4, 5518.0], [54.5, 5540.0], [54.6, 5540.0], [54.7, 5540.0], [54.8, 5540.0], [54.9, 5540.0], [55.0, 5650.0], [55.1, 5650.0], [55.2, 5650.0], [55.3, 5650.0], [55.4, 5650.0], [55.5, 5689.0], [55.6, 5689.0], [55.7, 5689.0], [55.8, 5689.0], [55.9, 5689.0], [56.0, 5726.0], [56.1, 5726.0], [56.2, 5726.0], [56.3, 5726.0], [56.4, 5726.0], [56.5, 5738.0], [56.6, 5738.0], [56.7, 5738.0], [56.8, 5738.0], [56.9, 5738.0], [57.0, 5756.0], [57.1, 5756.0], [57.2, 5756.0], [57.3, 5756.0], [57.4, 5756.0], [57.5, 5886.0], [57.6, 5886.0], [57.7, 5886.0], [57.8, 5886.0], [57.9, 5886.0], [58.0, 5915.0], [58.1, 5915.0], [58.2, 5915.0], [58.3, 5915.0], [58.4, 5915.0], [58.5, 5945.0], [58.6, 5945.0], [58.7, 5945.0], [58.8, 5945.0], [58.9, 5945.0], [59.0, 5961.0], [59.1, 5961.0], [59.2, 5961.0], [59.3, 5961.0], [59.4, 5961.0], [59.5, 5974.0], [59.6, 5974.0], [59.7, 5974.0], [59.8, 5974.0], [59.9, 5974.0], [60.0, 6108.0], [60.1, 6108.0], [60.2, 6108.0], [60.3, 6108.0], [60.4, 6108.0], [60.5, 6133.0], [60.6, 6133.0], [60.7, 6133.0], [60.8, 6133.0], [60.9, 6133.0], [61.0, 6162.0], [61.1, 6162.0], [61.2, 6162.0], [61.3, 6162.0], [61.4, 6162.0], [61.5, 6179.0], [61.6, 6179.0], [61.7, 6179.0], [61.8, 6179.0], [61.9, 6179.0], [62.0, 6198.0], [62.1, 6198.0], [62.2, 6198.0], [62.3, 6198.0], [62.4, 6198.0], [62.5, 6322.0], [62.6, 6322.0], [62.7, 6322.0], [62.8, 6322.0], [62.9, 6322.0], [63.0, 6364.0], [63.1, 6364.0], [63.2, 6364.0], [63.3, 6364.0], [63.4, 6364.0], [63.5, 6397.0], [63.6, 6397.0], [63.7, 6397.0], [63.8, 6397.0], [63.9, 6397.0], [64.0, 6403.0], [64.1, 6403.0], [64.2, 6403.0], [64.3, 6403.0], [64.4, 6403.0], [64.5, 6421.0], [64.6, 6421.0], [64.7, 6421.0], [64.8, 6421.0], [64.9, 6421.0], [65.0, 6544.0], [65.1, 6544.0], [65.2, 6544.0], [65.3, 6544.0], [65.4, 6544.0], [65.5, 6577.0], [65.6, 6577.0], [65.7, 6577.0], [65.8, 6577.0], [65.9, 6577.0], [66.0, 6615.0], [66.1, 6615.0], [66.2, 6615.0], [66.3, 6615.0], [66.4, 6615.0], [66.5, 6633.0], [66.6, 6633.0], [66.7, 6633.0], [66.8, 6633.0], [66.9, 6633.0], [67.0, 6647.0], [67.1, 6647.0], [67.2, 6647.0], [67.3, 6647.0], [67.4, 6647.0], [67.5, 6760.0], [67.6, 6760.0], [67.7, 6760.0], [67.8, 6760.0], [67.9, 6760.0], [68.0, 6796.0], [68.1, 6796.0], [68.2, 6796.0], [68.3, 6796.0], [68.4, 6796.0], [68.5, 6826.0], [68.6, 6826.0], [68.7, 6826.0], [68.8, 6826.0], [68.9, 6826.0], [69.0, 6858.0], [69.1, 6858.0], [69.2, 6858.0], [69.3, 6858.0], [69.4, 6858.0], [69.5, 6866.0], [69.6, 6866.0], [69.7, 6866.0], [69.8, 6866.0], [69.9, 6866.0], [70.0, 6981.0], [70.1, 6981.0], [70.2, 6981.0], [70.3, 6981.0], [70.4, 6981.0], [70.5, 7015.0], [70.6, 7015.0], [70.7, 7015.0], [70.8, 7015.0], [70.9, 7015.0], [71.0, 7045.0], [71.1, 7045.0], [71.2, 7045.0], [71.3, 7045.0], [71.4, 7045.0], [71.5, 7077.0], [71.6, 7077.0], [71.7, 7077.0], [71.8, 7077.0], [71.9, 7077.0], [72.0, 7084.0], [72.1, 7084.0], [72.2, 7084.0], [72.3, 7084.0], [72.4, 7084.0], [72.5, 7196.0], [72.6, 7196.0], [72.7, 7196.0], [72.8, 7196.0], [72.9, 7196.0], [73.0, 7232.0], [73.1, 7232.0], [73.2, 7232.0], [73.3, 7232.0], [73.4, 7232.0], [73.5, 7277.0], [73.6, 7277.0], [73.7, 7277.0], [73.8, 7277.0], [73.9, 7277.0], [74.0, 7323.0], [74.1, 7323.0], [74.2, 7323.0], [74.3, 7323.0], [74.4, 7323.0], [74.5, 7328.0], [74.6, 7328.0], [74.7, 7328.0], [74.8, 7328.0], [74.9, 7328.0], [75.0, 7415.0], [75.1, 7415.0], [75.2, 7415.0], [75.3, 7415.0], [75.4, 7415.0], [75.5, 7445.0], [75.6, 7445.0], [75.7, 7445.0], [75.8, 7445.0], [75.9, 7445.0], [76.0, 7491.0], [76.1, 7491.0], [76.2, 7491.0], [76.3, 7491.0], [76.4, 7491.0], [76.5, 7544.0], [76.6, 7544.0], [76.7, 7544.0], [76.8, 7544.0], [76.9, 7544.0], [77.0, 7554.0], [77.1, 7554.0], [77.2, 7554.0], [77.3, 7554.0], [77.4, 7554.0], [77.5, 7631.0], [77.6, 7631.0], [77.7, 7631.0], [77.8, 7631.0], [77.9, 7631.0], [78.0, 7662.0], [78.1, 7662.0], [78.2, 7662.0], [78.3, 7662.0], [78.4, 7662.0], [78.5, 7702.0], [78.6, 7702.0], [78.7, 7702.0], [78.8, 7702.0], [78.9, 7702.0], [79.0, 7760.0], [79.1, 7760.0], [79.2, 7760.0], [79.3, 7760.0], [79.4, 7760.0], [79.5, 7778.0], [79.6, 7778.0], [79.7, 7778.0], [79.8, 7778.0], [79.9, 7778.0], [80.0, 7846.0], [80.1, 7846.0], [80.2, 7846.0], [80.3, 7846.0], [80.4, 7846.0], [80.5, 7880.0], [80.6, 7880.0], [80.7, 7880.0], [80.8, 7880.0], [80.9, 7880.0], [81.0, 7920.0], [81.1, 7920.0], [81.2, 7920.0], [81.3, 7920.0], [81.4, 7920.0], [81.5, 7978.0], [81.6, 7978.0], [81.7, 7978.0], [81.8, 7978.0], [81.9, 7978.0], [82.0, 7995.0], [82.1, 7995.0], [82.2, 7995.0], [82.3, 7995.0], [82.4, 7995.0], [82.5, 8062.0], [82.6, 8062.0], [82.7, 8062.0], [82.8, 8062.0], [82.9, 8062.0], [83.0, 8093.0], [83.1, 8093.0], [83.2, 8093.0], [83.3, 8093.0], [83.4, 8093.0], [83.5, 8136.0], [83.6, 8136.0], [83.7, 8136.0], [83.8, 8136.0], [83.9, 8136.0], [84.0, 8211.0], [84.1, 8211.0], [84.2, 8211.0], [84.3, 8211.0], [84.4, 8211.0], [84.5, 8230.0], [84.6, 8230.0], [84.7, 8230.0], [84.8, 8230.0], [84.9, 8230.0], [85.0, 8276.0], [85.1, 8276.0], [85.2, 8276.0], [85.3, 8276.0], [85.4, 8276.0], [85.5, 8313.0], [85.6, 8313.0], [85.7, 8313.0], [85.8, 8313.0], [85.9, 8313.0], [86.0, 8349.0], [86.1, 8349.0], [86.2, 8349.0], [86.3, 8349.0], [86.4, 8349.0], [86.5, 8426.0], [86.6, 8426.0], [86.7, 8426.0], [86.8, 8426.0], [86.9, 8426.0], [87.0, 8450.0], [87.1, 8450.0], [87.2, 8450.0], [87.3, 8450.0], [87.4, 8450.0], [87.5, 8495.0], [87.6, 8495.0], [87.7, 8495.0], [87.8, 8495.0], [87.9, 8495.0], [88.0, 8528.0], [88.1, 8528.0], [88.2, 8528.0], [88.3, 8528.0], [88.4, 8528.0], [88.5, 8564.0], [88.6, 8564.0], [88.7, 8564.0], [88.8, 8564.0], [88.9, 8564.0], [89.0, 8643.0], [89.1, 8643.0], [89.2, 8643.0], [89.3, 8643.0], [89.4, 8643.0], [89.5, 8670.0], [89.6, 8670.0], [89.7, 8670.0], [89.8, 8670.0], [89.9, 8670.0], [90.0, 8710.0], [90.1, 8710.0], [90.2, 8710.0], [90.3, 8710.0], [90.4, 8710.0], [90.5, 8743.0], [90.6, 8743.0], [90.7, 8743.0], [90.8, 8743.0], [90.9, 8743.0], [91.0, 8778.0], [91.1, 8778.0], [91.2, 8778.0], [91.3, 8778.0], [91.4, 8778.0], [91.5, 8859.0], [91.6, 8859.0], [91.7, 8859.0], [91.8, 8859.0], [91.9, 8859.0], [92.0, 8891.0], [92.1, 8891.0], [92.2, 8891.0], [92.3, 8891.0], [92.4, 8891.0], [92.5, 8926.0], [92.6, 8926.0], [92.7, 8926.0], [92.8, 8926.0], [92.9, 8926.0], [93.0, 8956.0], [93.1, 8956.0], [93.2, 8956.0], [93.3, 8956.0], [93.4, 8956.0], [93.5, 8995.0], [93.6, 8995.0], [93.7, 8995.0], [93.8, 8995.0], [93.9, 8995.0], [94.0, 9075.0], [94.1, 9075.0], [94.2, 9075.0], [94.3, 9075.0], [94.4, 9075.0], [94.5, 9113.0], [94.6, 9113.0], [94.7, 9113.0], [94.8, 9113.0], [94.9, 9113.0], [95.0, 9159.0], [95.1, 9159.0], [95.2, 9159.0], [95.3, 9159.0], [95.4, 9159.0], [95.5, 9178.0], [95.6, 9178.0], [95.7, 9178.0], [95.8, 9178.0], [95.9, 9178.0], [96.0, 9216.0], [96.1, 9216.0], [96.2, 9216.0], [96.3, 9216.0], [96.4, 9216.0], [96.5, 9291.0], [96.6, 9291.0], [96.7, 9291.0], [96.8, 9291.0], [96.9, 9291.0], [97.0, 9330.0], [97.1, 9330.0], [97.2, 9330.0], [97.3, 9330.0], [97.4, 9330.0], [97.5, 9375.0], [97.6, 9375.0], [97.7, 9375.0], [97.8, 9375.0], [97.9, 9375.0], [98.0, 9394.0], [98.1, 9394.0], [98.2, 9394.0], [98.3, 9394.0], [98.4, 9394.0], [98.5, 9429.0], [98.6, 9429.0], [98.7, 9429.0], [98.8, 9429.0], [98.9, 9429.0], [99.0, 9522.0], [99.1, 9522.0], [99.2, 9522.0], [99.3, 9522.0], [99.4, 9522.0], [99.5, 9555.0], [99.6, 9555.0], [99.7, 9555.0], [99.8, 9555.0], [99.9, 9555.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 5.0, "series": [{"data": [[600.0, 3.0], [800.0, 1.0], [900.0, 3.0], [1000.0, 1.0], [1100.0, 3.0], [1300.0, 3.0], [1400.0, 2.0], [1500.0, 1.0], [1600.0, 4.0], [1700.0, 1.0], [1800.0, 4.0], [1900.0, 1.0], [2000.0, 3.0], [2100.0, 1.0], [2200.0, 3.0], [2300.0, 2.0], [2400.0, 2.0], [2500.0, 3.0], [2700.0, 5.0], [2900.0, 4.0], [3000.0, 1.0], [3100.0, 2.0], [3200.0, 3.0], [3300.0, 1.0], [3400.0, 4.0], [3600.0, 4.0], [3700.0, 1.0], [3800.0, 1.0], [3900.0, 4.0], [4000.0, 1.0], [4100.0, 4.0], [4300.0, 2.0], [4400.0, 3.0], [4500.0, 2.0], [4600.0, 3.0], [4700.0, 1.0], [4800.0, 4.0], [4900.0, 1.0], [5000.0, 4.0], [5200.0, 4.0], [5300.0, 1.0], [5400.0, 2.0], [5500.0, 3.0], [5600.0, 2.0], [5700.0, 3.0], [5800.0, 1.0], [5900.0, 4.0], [6100.0, 5.0], [6300.0, 3.0], [6400.0, 2.0], [6500.0, 2.0], [6600.0, 3.0], [6700.0, 2.0], [6800.0, 3.0], [6900.0, 1.0], [7000.0, 4.0], [7100.0, 1.0], [7200.0, 2.0], [7300.0, 2.0], [7400.0, 3.0], [7500.0, 2.0], [7600.0, 2.0], [7700.0, 3.0], [7800.0, 2.0], [7900.0, 3.0], [8000.0, 2.0], [8100.0, 1.0], [8200.0, 3.0], [8300.0, 2.0], [8400.0, 3.0], [8500.0, 2.0], [8600.0, 2.0], [8700.0, 3.0], [8800.0, 2.0], [8900.0, 3.0], [9000.0, 1.0], [9100.0, 3.0], [9200.0, 2.0], [9300.0, 3.0], [9400.0, 1.0], [9500.0, 2.0], [300.0, 3.0], [500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 180.0, "series": [{"data": [[0.0, 3.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 17.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 180.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 96.9149999999999, "minX": 1.70806482E12, "maxY": 96.9149999999999, "series": [{"data": [[1.70806482E12, 96.9149999999999]], "isOverall": false, "label": "send message", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70806482E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1045.0, "minX": 1.0, "maxY": 9555.0, "series": [{"data": [[2.0, 9522.0], [3.0, 9429.0], [4.0, 9394.0], [5.0, 9375.0], [6.0, 9330.0], [7.0, 9291.0], [8.0, 9216.0], [9.0, 9178.0], [10.0, 9159.0], [11.0, 9113.0], [12.0, 9075.0], [13.0, 8995.0], [14.0, 8956.0], [15.0, 8926.0], [16.0, 8891.0], [17.0, 8859.0], [18.0, 8778.0], [19.0, 8743.0], [20.0, 8710.0], [21.0, 8670.0], [22.0, 8643.0], [23.0, 8564.0], [24.0, 8528.0], [25.0, 8495.0], [26.0, 8450.0], [27.0, 8426.0], [28.0, 8349.0], [29.0, 8313.0], [30.0, 8276.0], [31.0, 8230.0], [33.0, 8136.0], [32.0, 8211.0], [35.0, 8062.0], [34.0, 8093.0], [37.0, 7978.0], [36.0, 7995.0], [39.0, 7880.0], [38.0, 7920.0], [41.0, 7778.0], [40.0, 7846.0], [43.0, 7702.0], [42.0, 7760.0], [45.0, 7631.0], [44.0, 7662.0], [47.0, 7544.0], [46.0, 7554.0], [49.0, 7445.0], [48.0, 7491.0], [51.0, 7328.0], [50.0, 7415.0], [53.0, 7277.0], [52.0, 7323.0], [55.0, 7196.0], [54.0, 7232.0], [57.0, 7077.0], [56.0, 7084.0], [59.0, 7015.0], [58.0, 7045.0], [61.0, 6866.0], [60.0, 6981.0], [63.0, 6826.0], [62.0, 6858.0], [65.0, 1929.25], [67.0, 6633.0], [66.0, 6647.0], [64.0, 6796.0], [71.0, 6421.0], [70.0, 6544.0], [69.0, 6577.0], [68.0, 6615.0], [75.0, 6322.0], [74.0, 6364.0], [73.0, 6397.0], [72.0, 6403.0], [79.0, 6133.0], [78.0, 6162.0], [77.0, 6179.0], [76.0, 6198.0], [83.0, 5945.0], [82.0, 5961.0], [81.0, 5974.0], [80.0, 6108.0], [87.0, 5738.0], [86.0, 5756.0], [85.0, 5886.0], [84.0, 5915.0], [91.0, 5540.0], [90.0, 5650.0], [89.0, 5689.0], [88.0, 5726.0], [95.0, 5436.0], [94.0, 5473.0], [93.0, 5507.0], [92.0, 5518.0], [99.0, 5244.0], [98.0, 5291.0], [97.0, 5299.0], [96.0, 5317.0], [103.0, 5072.0], [102.0, 5076.0], [101.0, 5087.0], [100.0, 5206.0], [107.0, 4855.0], [106.0, 4867.0], [105.0, 4990.0], [104.0, 5025.0], [111.0, 4636.0], [110.0, 4773.0], [109.0, 4811.0], [108.0, 4851.0], [115.0, 4556.0], [114.0, 4594.0], [113.0, 4623.0], [112.0, 4633.0], [119.0, 2481.5], [118.0, 4406.0], [117.0, 4402.0], [116.0, 4412.0], [123.0, 4146.0], [122.0, 4144.0], [121.0, 4159.0], [120.0, 4341.0], [127.0, 3918.0], [126.0, 3933.0], [125.0, 4094.0], [124.0, 4122.0], [129.0, 2270.5], [130.0, 2262.0], [128.0, 2280.5], [135.0, 3662.0], [134.0, 3677.0], [133.0, 3695.0], [132.0, 3694.0], [131.0, 3706.0], [143.0, 3209.0], [142.0, 3215.0], [141.0, 3233.0], [140.0, 3396.0], [139.0, 3417.0], [138.0, 3437.0], [137.0, 3440.0], [136.0, 3458.0], [151.0, 2797.0], [150.0, 2952.0], [149.0, 2969.0], [148.0, 2981.0], [147.0, 2990.0], [146.0, 3017.0], [145.0, 3172.0], [144.0, 3197.0], [159.0, 2491.0], [158.0, 2533.0], [157.0, 2541.0], [156.0, 2575.0], [155.0, 2728.0], [154.0, 2746.0], [153.0, 2758.0], [152.0, 2765.0], [167.0, 2079.0], [166.0, 2114.0], [165.0, 2203.0], [164.0, 2261.0], [163.0, 2299.0], [162.0, 2302.0], [161.0, 2333.0], [160.0, 2424.0], [171.0, 1374.5], [175.0, 1752.0], [174.0, 1827.0], [173.0, 1848.0], [172.0, 1853.0], [170.0, 1970.0], [169.0, 2044.0], [168.0, 2077.0], [183.0, 1391.0], [182.0, 1400.0], [181.0, 1439.0], [180.0, 1519.0], [179.0, 1603.0], [178.0, 1609.0], [177.0, 1621.0], [176.0, 1663.0], [185.0, 1048.6666666666667], [186.0, 1045.0], [189.0, 1077.0], [188.0, 1156.0], [187.0, 1153.0], [184.0, 1378.0], [1.0, 9555.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[96.9149999999999, 5109.414999999997]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 189.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1093.3333333333333, "minX": 1.70806482E12, "maxY": 1169.3166666666666, "series": [{"data": [[1.70806482E12, 1169.3166666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70806482E12, 1093.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70806482E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 5109.414999999997, "minX": 1.70806482E12, "maxY": 5109.414999999997, "series": [{"data": [[1.70806482E12, 5109.414999999997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70806482E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 5109.385000000002, "minX": 1.70806482E12, "maxY": 5109.385000000002, "series": [{"data": [[1.70806482E12, 5109.385000000002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70806482E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.5549999999999999, "minX": 1.70806482E12, "maxY": 0.5549999999999999, "series": [{"data": [[1.70806482E12, 0.5549999999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70806482E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 313.0, "minX": 1.70806482E12, "maxY": 9555.0, "series": [{"data": [[1.70806482E12, 9555.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70806482E12, 8706.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70806482E12, 9521.070000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70806482E12, 9156.699999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.70806482E12, 313.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70806482E12, 5146.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70806482E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 640.0, "minX": 11.0, "maxY": 9310.5, "series": [{"data": [[17.0, 1439.0], [18.0, 3184.5], [19.0, 2299.0], [20.0, 5900.5], [21.0, 6796.0], [11.0, 640.0], [12.0, 9310.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 640.0, "minX": 11.0, "maxY": 9310.5, "series": [{"data": [[17.0, 1439.0], [18.0, 3184.5], [19.0, 2299.0], [20.0, 5900.5], [21.0, 6796.0], [11.0, 640.0], [12.0, 9310.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.70806482E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.70806482E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70806482E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.70806482E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.70806482E12, 3.3333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70806482E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.70806482E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.70806482E12, 3.3333333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70806482E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.70806482E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.70806482E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70806482E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

