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
        data: {"result": {"minY": 1102.0, "minX": 0.0, "maxY": 12341.0, "series": [{"data": [[0.0, 1102.0], [0.1, 1102.0], [0.2, 1102.0], [0.3, 1102.0], [0.4, 1102.0], [0.5, 1107.0], [0.6, 1107.0], [0.7, 1107.0], [0.8, 1107.0], [0.9, 1107.0], [1.0, 1122.0], [1.1, 1122.0], [1.2, 1122.0], [1.3, 1122.0], [1.4, 1122.0], [1.5, 1369.0], [1.6, 1369.0], [1.7, 1369.0], [1.8, 1369.0], [1.9, 1369.0], [2.0, 1382.0], [2.1, 1382.0], [2.2, 1382.0], [2.3, 1382.0], [2.4, 1382.0], [2.5, 1472.0], [2.6, 1472.0], [2.7, 1472.0], [2.8, 1472.0], [2.9, 1472.0], [3.0, 1509.0], [3.1, 1509.0], [3.2, 1509.0], [3.3, 1509.0], [3.4, 1509.0], [3.5, 1740.0], [3.6, 1740.0], [3.7, 1740.0], [3.8, 1740.0], [3.9, 1740.0], [4.0, 1760.0], [4.1, 1760.0], [4.2, 1760.0], [4.3, 1760.0], [4.4, 1760.0], [4.5, 1806.0], [4.6, 1806.0], [4.7, 1806.0], [4.8, 1806.0], [4.9, 1806.0], [5.0, 1887.0], [5.1, 1887.0], [5.2, 1887.0], [5.3, 1887.0], [5.4, 1887.0], [5.5, 2070.0], [5.6, 2070.0], [5.7, 2070.0], [5.8, 2070.0], [5.9, 2070.0], [6.0, 2107.0], [6.1, 2107.0], [6.2, 2107.0], [6.3, 2107.0], [6.4, 2107.0], [6.5, 2124.0], [6.6, 2124.0], [6.7, 2124.0], [6.8, 2124.0], [6.9, 2124.0], [7.0, 2152.0], [7.1, 2152.0], [7.2, 2152.0], [7.3, 2152.0], [7.4, 2152.0], [7.5, 2464.0], [7.6, 2464.0], [7.7, 2464.0], [7.8, 2464.0], [7.9, 2464.0], [8.0, 2469.0], [8.1, 2469.0], [8.2, 2469.0], [8.3, 2469.0], [8.4, 2469.0], [8.5, 2473.0], [8.6, 2473.0], [8.7, 2473.0], [8.8, 2473.0], [8.9, 2473.0], [9.0, 2475.0], [9.1, 2475.0], [9.2, 2475.0], [9.3, 2475.0], [9.4, 2475.0], [9.5, 2491.0], [9.6, 2491.0], [9.7, 2491.0], [9.8, 2491.0], [9.9, 2491.0], [10.0, 2713.0], [10.1, 2713.0], [10.2, 2713.0], [10.3, 2713.0], [10.4, 2713.0], [10.5, 2792.0], [10.6, 2792.0], [10.7, 2792.0], [10.8, 2792.0], [10.9, 2792.0], [11.0, 2840.0], [11.1, 2840.0], [11.2, 2840.0], [11.3, 2840.0], [11.4, 2840.0], [11.5, 2867.0], [11.6, 2867.0], [11.7, 2867.0], [11.8, 2867.0], [11.9, 2867.0], [12.0, 2875.0], [12.1, 2875.0], [12.2, 2875.0], [12.3, 2875.0], [12.4, 2875.0], [12.5, 2952.0], [12.6, 2952.0], [12.7, 2952.0], [12.8, 2952.0], [12.9, 2952.0], [13.0, 3022.0], [13.1, 3022.0], [13.2, 3022.0], [13.3, 3022.0], [13.4, 3022.0], [13.5, 3066.0], [13.6, 3066.0], [13.7, 3066.0], [13.8, 3066.0], [13.9, 3066.0], [14.0, 3119.0], [14.1, 3119.0], [14.2, 3119.0], [14.3, 3119.0], [14.4, 3119.0], [14.5, 3125.0], [14.6, 3125.0], [14.7, 3125.0], [14.8, 3125.0], [14.9, 3125.0], [15.0, 3182.0], [15.1, 3182.0], [15.2, 3182.0], [15.3, 3182.0], [15.4, 3182.0], [15.5, 3282.0], [15.6, 3282.0], [15.7, 3282.0], [15.8, 3282.0], [15.9, 3282.0], [16.0, 3321.0], [16.1, 3321.0], [16.2, 3321.0], [16.3, 3321.0], [16.4, 3321.0], [16.5, 3383.0], [16.6, 3383.0], [16.7, 3383.0], [16.8, 3383.0], [16.9, 3383.0], [17.0, 3397.0], [17.1, 3397.0], [17.2, 3397.0], [17.3, 3397.0], [17.4, 3397.0], [17.5, 3445.0], [17.6, 3445.0], [17.7, 3445.0], [17.8, 3445.0], [17.9, 3445.0], [18.0, 3554.0], [18.1, 3554.0], [18.2, 3554.0], [18.3, 3554.0], [18.4, 3554.0], [18.5, 3617.0], [18.6, 3617.0], [18.7, 3617.0], [18.8, 3617.0], [18.9, 3617.0], [19.0, 3707.0], [19.1, 3707.0], [19.2, 3707.0], [19.3, 3707.0], [19.4, 3707.0], [19.5, 3720.0], [19.6, 3720.0], [19.7, 3720.0], [19.8, 3720.0], [19.9, 3720.0], [20.0, 3749.0], [20.1, 3749.0], [20.2, 3749.0], [20.3, 3749.0], [20.4, 3749.0], [20.5, 3820.0], [20.6, 3820.0], [20.7, 3820.0], [20.8, 3820.0], [20.9, 3820.0], [21.0, 3877.0], [21.1, 3877.0], [21.2, 3877.0], [21.3, 3877.0], [21.4, 3877.0], [21.5, 3981.0], [21.6, 3981.0], [21.7, 3981.0], [21.8, 3981.0], [21.9, 3981.0], [22.0, 4015.0], [22.1, 4015.0], [22.2, 4015.0], [22.3, 4015.0], [22.4, 4015.0], [22.5, 4028.0], [22.6, 4028.0], [22.7, 4028.0], [22.8, 4028.0], [22.9, 4028.0], [23.0, 4081.0], [23.1, 4081.0], [23.2, 4081.0], [23.3, 4081.0], [23.4, 4081.0], [23.5, 4134.0], [23.6, 4134.0], [23.7, 4134.0], [23.8, 4134.0], [23.9, 4134.0], [24.0, 4238.0], [24.1, 4238.0], [24.2, 4238.0], [24.3, 4238.0], [24.4, 4238.0], [24.5, 4310.0], [24.6, 4310.0], [24.7, 4310.0], [24.8, 4310.0], [24.9, 4310.0], [25.0, 4334.0], [25.1, 4334.0], [25.2, 4334.0], [25.3, 4334.0], [25.4, 4334.0], [25.5, 4378.0], [25.6, 4378.0], [25.7, 4378.0], [25.8, 4378.0], [25.9, 4378.0], [26.0, 4408.0], [26.1, 4408.0], [26.2, 4408.0], [26.3, 4408.0], [26.4, 4408.0], [26.5, 4489.0], [26.6, 4489.0], [26.7, 4489.0], [26.8, 4489.0], [26.9, 4489.0], [27.0, 4572.0], [27.1, 4572.0], [27.2, 4572.0], [27.3, 4572.0], [27.4, 4572.0], [27.5, 4623.0], [27.6, 4623.0], [27.7, 4623.0], [27.8, 4623.0], [27.9, 4623.0], [28.0, 4677.0], [28.1, 4677.0], [28.2, 4677.0], [28.3, 4677.0], [28.4, 4677.0], [28.5, 4695.0], [28.6, 4695.0], [28.7, 4695.0], [28.8, 4695.0], [28.9, 4695.0], [29.0, 4747.0], [29.1, 4747.0], [29.2, 4747.0], [29.3, 4747.0], [29.4, 4747.0], [29.5, 4840.0], [29.6, 4840.0], [29.7, 4840.0], [29.8, 4840.0], [29.9, 4840.0], [30.0, 4913.0], [30.1, 4913.0], [30.2, 4913.0], [30.3, 4913.0], [30.4, 4913.0], [30.5, 4965.0], [30.6, 4965.0], [30.7, 4965.0], [30.8, 4965.0], [30.9, 4965.0], [31.0, 4973.0], [31.1, 4973.0], [31.2, 4973.0], [31.3, 4973.0], [31.4, 4973.0], [31.5, 5011.0], [31.6, 5011.0], [31.7, 5011.0], [31.8, 5011.0], [31.9, 5011.0], [32.0, 5090.0], [32.1, 5090.0], [32.2, 5090.0], [32.3, 5090.0], [32.4, 5090.0], [32.5, 5161.0], [32.6, 5161.0], [32.7, 5161.0], [32.8, 5161.0], [32.9, 5161.0], [33.0, 5237.0], [33.1, 5237.0], [33.2, 5237.0], [33.3, 5237.0], [33.4, 5237.0], [33.5, 5239.0], [33.6, 5239.0], [33.7, 5239.0], [33.8, 5239.0], [33.9, 5239.0], [34.0, 5281.0], [34.1, 5281.0], [34.2, 5281.0], [34.3, 5281.0], [34.4, 5281.0], [34.5, 5346.0], [34.6, 5346.0], [34.7, 5346.0], [34.8, 5346.0], [34.9, 5346.0], [35.0, 5413.0], [35.1, 5413.0], [35.2, 5413.0], [35.3, 5413.0], [35.4, 5413.0], [35.5, 5517.0], [35.6, 5517.0], [35.7, 5517.0], [35.8, 5517.0], [35.9, 5517.0], [36.0, 5522.0], [36.1, 5522.0], [36.2, 5522.0], [36.3, 5522.0], [36.4, 5522.0], [36.5, 5580.0], [36.6, 5580.0], [36.7, 5580.0], [36.8, 5580.0], [36.9, 5580.0], [37.0, 5623.0], [37.1, 5623.0], [37.2, 5623.0], [37.3, 5623.0], [37.4, 5623.0], [37.5, 5667.0], [37.6, 5667.0], [37.7, 5667.0], [37.8, 5667.0], [37.9, 5667.0], [38.0, 5818.0], [38.1, 5818.0], [38.2, 5818.0], [38.3, 5818.0], [38.4, 5818.0], [38.5, 5844.0], [38.6, 5844.0], [38.7, 5844.0], [38.8, 5844.0], [38.9, 5844.0], [39.0, 5885.0], [39.1, 5885.0], [39.2, 5885.0], [39.3, 5885.0], [39.4, 5885.0], [39.5, 5908.0], [39.6, 5908.0], [39.7, 5908.0], [39.8, 5908.0], [39.9, 5908.0], [40.0, 5937.0], [40.1, 5937.0], [40.2, 5937.0], [40.3, 5937.0], [40.4, 5937.0], [40.5, 6072.0], [40.6, 6072.0], [40.7, 6072.0], [40.8, 6072.0], [40.9, 6072.0], [41.0, 6108.0], [41.1, 6108.0], [41.2, 6108.0], [41.3, 6108.0], [41.4, 6108.0], [41.5, 6153.0], [41.6, 6153.0], [41.7, 6153.0], [41.8, 6153.0], [41.9, 6153.0], [42.0, 6184.0], [42.1, 6184.0], [42.2, 6184.0], [42.3, 6184.0], [42.4, 6184.0], [42.5, 6215.0], [42.6, 6215.0], [42.7, 6215.0], [42.8, 6215.0], [42.9, 6215.0], [43.0, 6331.0], [43.1, 6331.0], [43.2, 6331.0], [43.3, 6331.0], [43.4, 6331.0], [43.5, 6371.0], [43.6, 6371.0], [43.7, 6371.0], [43.8, 6371.0], [43.9, 6371.0], [44.0, 6411.0], [44.1, 6411.0], [44.2, 6411.0], [44.3, 6411.0], [44.4, 6411.0], [44.5, 6454.0], [44.6, 6454.0], [44.7, 6454.0], [44.8, 6454.0], [44.9, 6454.0], [45.0, 6488.0], [45.1, 6488.0], [45.2, 6488.0], [45.3, 6488.0], [45.4, 6488.0], [45.5, 6582.0], [45.6, 6582.0], [45.7, 6582.0], [45.8, 6582.0], [45.9, 6582.0], [46.0, 6630.0], [46.1, 6630.0], [46.2, 6630.0], [46.3, 6630.0], [46.4, 6630.0], [46.5, 6678.0], [46.6, 6678.0], [46.7, 6678.0], [46.8, 6678.0], [46.9, 6678.0], [47.0, 6727.0], [47.1, 6727.0], [47.2, 6727.0], [47.3, 6727.0], [47.4, 6727.0], [47.5, 6766.0], [47.6, 6766.0], [47.7, 6766.0], [47.8, 6766.0], [47.9, 6766.0], [48.0, 6840.0], [48.1, 6840.0], [48.2, 6840.0], [48.3, 6840.0], [48.4, 6840.0], [48.5, 6883.0], [48.6, 6883.0], [48.7, 6883.0], [48.8, 6883.0], [48.9, 6883.0], [49.0, 6936.0], [49.1, 6936.0], [49.2, 6936.0], [49.3, 6936.0], [49.4, 6936.0], [49.5, 6986.0], [49.6, 6986.0], [49.7, 6986.0], [49.8, 6986.0], [49.9, 6986.0], [50.0, 7022.0], [50.1, 7022.0], [50.2, 7022.0], [50.3, 7022.0], [50.4, 7022.0], [50.5, 7092.0], [50.6, 7092.0], [50.7, 7092.0], [50.8, 7092.0], [50.9, 7092.0], [51.0, 7139.0], [51.1, 7139.0], [51.2, 7139.0], [51.3, 7139.0], [51.4, 7139.0], [51.5, 7193.0], [51.6, 7193.0], [51.7, 7193.0], [51.8, 7193.0], [51.9, 7193.0], [52.0, 7241.0], [52.1, 7241.0], [52.2, 7241.0], [52.3, 7241.0], [52.4, 7241.0], [52.5, 7290.0], [52.6, 7290.0], [52.7, 7290.0], [52.8, 7290.0], [52.9, 7290.0], [53.0, 7353.0], [53.1, 7353.0], [53.2, 7353.0], [53.3, 7353.0], [53.4, 7353.0], [53.5, 7398.0], [53.6, 7398.0], [53.7, 7398.0], [53.8, 7398.0], [53.9, 7398.0], [54.0, 7472.0], [54.1, 7472.0], [54.2, 7472.0], [54.3, 7472.0], [54.4, 7472.0], [54.5, 7520.0], [54.6, 7520.0], [54.7, 7520.0], [54.8, 7520.0], [54.9, 7520.0], [55.0, 7552.0], [55.1, 7552.0], [55.2, 7552.0], [55.3, 7552.0], [55.4, 7552.0], [55.5, 7610.0], [55.6, 7610.0], [55.7, 7610.0], [55.8, 7610.0], [55.9, 7610.0], [56.0, 7654.0], [56.1, 7654.0], [56.2, 7654.0], [56.3, 7654.0], [56.4, 7654.0], [56.5, 7723.0], [56.6, 7723.0], [56.7, 7723.0], [56.8, 7723.0], [56.9, 7723.0], [57.0, 7787.0], [57.1, 7787.0], [57.2, 7787.0], [57.3, 7787.0], [57.4, 7787.0], [57.5, 7819.0], [57.6, 7819.0], [57.7, 7819.0], [57.8, 7819.0], [57.9, 7819.0], [58.0, 7867.0], [58.1, 7867.0], [58.2, 7867.0], [58.3, 7867.0], [58.4, 7867.0], [58.5, 7907.0], [58.6, 7907.0], [58.7, 7907.0], [58.8, 7907.0], [58.9, 7907.0], [59.0, 7978.0], [59.1, 7978.0], [59.2, 7978.0], [59.3, 7978.0], [59.4, 7978.0], [59.5, 8074.0], [59.6, 8074.0], [59.7, 8074.0], [59.8, 8074.0], [59.9, 8074.0], [60.0, 8109.0], [60.1, 8109.0], [60.2, 8109.0], [60.3, 8109.0], [60.4, 8109.0], [60.5, 8163.0], [60.6, 8163.0], [60.7, 8163.0], [60.8, 8163.0], [60.9, 8163.0], [61.0, 8178.0], [61.1, 8178.0], [61.2, 8178.0], [61.3, 8178.0], [61.4, 8178.0], [61.5, 8234.0], [61.6, 8234.0], [61.7, 8234.0], [61.8, 8234.0], [61.9, 8234.0], [62.0, 8344.0], [62.1, 8344.0], [62.2, 8344.0], [62.3, 8344.0], [62.4, 8344.0], [62.5, 8368.0], [62.6, 8368.0], [62.7, 8368.0], [62.8, 8368.0], [62.9, 8368.0], [63.0, 8435.0], [63.1, 8435.0], [63.2, 8435.0], [63.3, 8435.0], [63.4, 8435.0], [63.5, 8464.0], [63.6, 8464.0], [63.7, 8464.0], [63.8, 8464.0], [63.9, 8464.0], [64.0, 8491.0], [64.1, 8491.0], [64.2, 8491.0], [64.3, 8491.0], [64.4, 8491.0], [64.5, 8601.0], [64.6, 8601.0], [64.7, 8601.0], [64.8, 8601.0], [64.9, 8601.0], [65.0, 8629.0], [65.1, 8629.0], [65.2, 8629.0], [65.3, 8629.0], [65.4, 8629.0], [65.5, 8698.0], [65.6, 8698.0], [65.7, 8698.0], [65.8, 8698.0], [65.9, 8698.0], [66.0, 8725.0], [66.1, 8725.0], [66.2, 8725.0], [66.3, 8725.0], [66.4, 8725.0], [66.5, 8755.0], [66.6, 8755.0], [66.7, 8755.0], [66.8, 8755.0], [66.9, 8755.0], [67.0, 8857.0], [67.1, 8857.0], [67.2, 8857.0], [67.3, 8857.0], [67.4, 8857.0], [67.5, 8887.0], [67.6, 8887.0], [67.7, 8887.0], [67.8, 8887.0], [67.9, 8887.0], [68.0, 8960.0], [68.1, 8960.0], [68.2, 8960.0], [68.3, 8960.0], [68.4, 8960.0], [68.5, 8993.0], [68.6, 8993.0], [68.7, 8993.0], [68.8, 8993.0], [68.9, 8993.0], [69.0, 9020.0], [69.1, 9020.0], [69.2, 9020.0], [69.3, 9020.0], [69.4, 9020.0], [69.5, 9112.0], [69.6, 9112.0], [69.7, 9112.0], [69.8, 9112.0], [69.9, 9112.0], [70.0, 9142.0], [70.1, 9142.0], [70.2, 9142.0], [70.3, 9142.0], [70.4, 9142.0], [70.5, 9215.0], [70.6, 9215.0], [70.7, 9215.0], [70.8, 9215.0], [70.9, 9215.0], [71.0, 9262.0], [71.1, 9262.0], [71.2, 9262.0], [71.3, 9262.0], [71.4, 9262.0], [71.5, 9282.0], [71.6, 9282.0], [71.7, 9282.0], [71.8, 9282.0], [71.9, 9282.0], [72.0, 9382.0], [72.1, 9382.0], [72.2, 9382.0], [72.3, 9382.0], [72.4, 9382.0], [72.5, 9412.0], [72.6, 9412.0], [72.7, 9412.0], [72.8, 9412.0], [72.9, 9412.0], [73.0, 9472.0], [73.1, 9472.0], [73.2, 9472.0], [73.3, 9472.0], [73.4, 9472.0], [73.5, 9552.0], [73.6, 9552.0], [73.7, 9552.0], [73.8, 9552.0], [73.9, 9552.0], [74.0, 9583.0], [74.1, 9583.0], [74.2, 9583.0], [74.3, 9583.0], [74.4, 9583.0], [74.5, 9644.0], [74.6, 9644.0], [74.7, 9644.0], [74.8, 9644.0], [74.9, 9644.0], [75.0, 9686.0], [75.1, 9686.0], [75.2, 9686.0], [75.3, 9686.0], [75.4, 9686.0], [75.5, 9730.0], [75.6, 9730.0], [75.7, 9730.0], [75.8, 9730.0], [75.9, 9730.0], [76.0, 9808.0], [76.1, 9808.0], [76.2, 9808.0], [76.3, 9808.0], [76.4, 9808.0], [76.5, 9847.0], [76.6, 9847.0], [76.7, 9847.0], [76.8, 9847.0], [76.9, 9847.0], [77.0, 9903.0], [77.1, 9903.0], [77.2, 9903.0], [77.3, 9903.0], [77.4, 9903.0], [77.5, 9944.0], [77.6, 9944.0], [77.7, 9944.0], [77.8, 9944.0], [77.9, 9944.0], [78.0, 9980.0], [78.1, 9980.0], [78.2, 9980.0], [78.3, 9980.0], [78.4, 9980.0], [78.5, 10057.0], [78.6, 10057.0], [78.7, 10057.0], [78.8, 10057.0], [78.9, 10057.0], [79.0, 10106.0], [79.1, 10106.0], [79.2, 10106.0], [79.3, 10106.0], [79.4, 10106.0], [79.5, 10172.0], [79.6, 10172.0], [79.7, 10172.0], [79.8, 10172.0], [79.9, 10172.0], [80.0, 10207.0], [80.1, 10207.0], [80.2, 10207.0], [80.3, 10207.0], [80.4, 10207.0], [80.5, 10246.0], [80.6, 10246.0], [80.7, 10246.0], [80.8, 10246.0], [80.9, 10246.0], [81.0, 10343.0], [81.1, 10343.0], [81.2, 10343.0], [81.3, 10343.0], [81.4, 10343.0], [81.5, 10370.0], [81.6, 10370.0], [81.7, 10370.0], [81.8, 10370.0], [81.9, 10370.0], [82.0, 10430.0], [82.1, 10430.0], [82.2, 10430.0], [82.3, 10430.0], [82.4, 10430.0], [82.5, 10494.0], [82.6, 10494.0], [82.7, 10494.0], [82.8, 10494.0], [82.9, 10494.0], [83.0, 10573.0], [83.1, 10573.0], [83.2, 10573.0], [83.3, 10573.0], [83.4, 10573.0], [83.5, 10637.0], [83.6, 10637.0], [83.7, 10637.0], [83.8, 10637.0], [83.9, 10637.0], [84.0, 10644.0], [84.1, 10644.0], [84.2, 10644.0], [84.3, 10644.0], [84.4, 10644.0], [84.5, 10692.0], [84.6, 10692.0], [84.7, 10692.0], [84.8, 10692.0], [84.9, 10692.0], [85.0, 10751.0], [85.1, 10751.0], [85.2, 10751.0], [85.3, 10751.0], [85.4, 10751.0], [85.5, 10822.0], [85.6, 10822.0], [85.7, 10822.0], [85.8, 10822.0], [85.9, 10822.0], [86.0, 10893.0], [86.1, 10893.0], [86.2, 10893.0], [86.3, 10893.0], [86.4, 10893.0], [86.5, 10907.0], [86.6, 10907.0], [86.7, 10907.0], [86.8, 10907.0], [86.9, 10907.0], [87.0, 10957.0], [87.1, 10957.0], [87.2, 10957.0], [87.3, 10957.0], [87.4, 10957.0], [87.5, 11014.0], [87.6, 11014.0], [87.7, 11014.0], [87.8, 11014.0], [87.9, 11014.0], [88.0, 11077.0], [88.1, 11077.0], [88.2, 11077.0], [88.3, 11077.0], [88.4, 11077.0], [88.5, 11158.0], [88.6, 11158.0], [88.7, 11158.0], [88.8, 11158.0], [88.9, 11158.0], [89.0, 11197.0], [89.1, 11197.0], [89.2, 11197.0], [89.3, 11197.0], [89.4, 11197.0], [89.5, 11245.0], [89.6, 11245.0], [89.7, 11245.0], [89.8, 11245.0], [89.9, 11245.0], [90.0, 11297.0], [90.1, 11297.0], [90.2, 11297.0], [90.3, 11297.0], [90.4, 11297.0], [90.5, 11342.0], [90.6, 11342.0], [90.7, 11342.0], [90.8, 11342.0], [90.9, 11342.0], [91.0, 11423.0], [91.1, 11423.0], [91.2, 11423.0], [91.3, 11423.0], [91.4, 11423.0], [91.5, 11479.0], [91.6, 11479.0], [91.7, 11479.0], [91.8, 11479.0], [91.9, 11479.0], [92.0, 11509.0], [92.1, 11509.0], [92.2, 11509.0], [92.3, 11509.0], [92.4, 11509.0], [92.5, 11561.0], [92.6, 11561.0], [92.7, 11561.0], [92.8, 11561.0], [92.9, 11561.0], [93.0, 11600.0], [93.1, 11600.0], [93.2, 11600.0], [93.3, 11600.0], [93.4, 11600.0], [93.5, 11677.0], [93.6, 11677.0], [93.7, 11677.0], [93.8, 11677.0], [93.9, 11677.0], [94.0, 11765.0], [94.1, 11765.0], [94.2, 11765.0], [94.3, 11765.0], [94.4, 11765.0], [94.5, 11803.0], [94.6, 11803.0], [94.7, 11803.0], [94.8, 11803.0], [94.9, 11803.0], [95.0, 11842.0], [95.1, 11842.0], [95.2, 11842.0], [95.3, 11842.0], [95.4, 11842.0], [95.5, 11873.0], [95.6, 11873.0], [95.7, 11873.0], [95.8, 11873.0], [95.9, 11873.0], [96.0, 11937.0], [96.1, 11937.0], [96.2, 11937.0], [96.3, 11937.0], [96.4, 11937.0], [96.5, 12022.0], [96.6, 12022.0], [96.7, 12022.0], [96.8, 12022.0], [96.9, 12022.0], [97.0, 12070.0], [97.1, 12070.0], [97.2, 12070.0], [97.3, 12070.0], [97.4, 12070.0], [97.5, 12116.0], [97.6, 12116.0], [97.7, 12116.0], [97.8, 12116.0], [97.9, 12116.0], [98.0, 12167.0], [98.1, 12167.0], [98.2, 12167.0], [98.3, 12167.0], [98.4, 12167.0], [98.5, 12240.0], [98.6, 12240.0], [98.7, 12240.0], [98.8, 12240.0], [98.9, 12240.0], [99.0, 12284.0], [99.1, 12284.0], [99.2, 12284.0], [99.3, 12284.0], [99.4, 12284.0], [99.5, 12341.0], [99.6, 12341.0], [99.7, 12341.0], [99.8, 12341.0], [99.9, 12341.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1100.0, "maxY": 5.0, "series": [{"data": [[1100.0, 3.0], [1300.0, 2.0], [1400.0, 1.0], [1500.0, 1.0], [1700.0, 2.0], [1800.0, 2.0], [2000.0, 1.0], [2100.0, 3.0], [2400.0, 5.0], [2700.0, 2.0], [2800.0, 3.0], [2900.0, 1.0], [3000.0, 2.0], [3100.0, 3.0], [3200.0, 1.0], [3300.0, 3.0], [3400.0, 1.0], [3500.0, 1.0], [3600.0, 1.0], [3700.0, 3.0], [3800.0, 2.0], [3900.0, 1.0], [4000.0, 3.0], [4100.0, 1.0], [4200.0, 1.0], [4300.0, 3.0], [4400.0, 2.0], [4500.0, 1.0], [4600.0, 3.0], [4700.0, 1.0], [4800.0, 1.0], [4900.0, 3.0], [5000.0, 2.0], [5100.0, 1.0], [5200.0, 3.0], [5300.0, 1.0], [5400.0, 1.0], [5500.0, 3.0], [5600.0, 2.0], [5800.0, 3.0], [5900.0, 2.0], [6000.0, 1.0], [6100.0, 3.0], [6200.0, 1.0], [6300.0, 2.0], [6400.0, 3.0], [6500.0, 1.0], [6600.0, 2.0], [6700.0, 2.0], [6800.0, 2.0], [6900.0, 2.0], [7000.0, 2.0], [7100.0, 2.0], [7200.0, 2.0], [7300.0, 2.0], [7400.0, 1.0], [7500.0, 2.0], [7600.0, 2.0], [7700.0, 2.0], [7800.0, 2.0], [7900.0, 2.0], [8000.0, 1.0], [8100.0, 3.0], [8200.0, 1.0], [8300.0, 2.0], [8400.0, 3.0], [8600.0, 3.0], [8700.0, 2.0], [8800.0, 2.0], [8900.0, 2.0], [9000.0, 1.0], [9100.0, 2.0], [9200.0, 3.0], [9300.0, 1.0], [9400.0, 2.0], [9500.0, 2.0], [9600.0, 2.0], [9700.0, 1.0], [9800.0, 2.0], [9900.0, 3.0], [10000.0, 1.0], [10100.0, 2.0], [10200.0, 2.0], [10300.0, 2.0], [10400.0, 2.0], [10500.0, 1.0], [10600.0, 3.0], [10700.0, 1.0], [10800.0, 2.0], [10900.0, 2.0], [11000.0, 2.0], [11100.0, 2.0], [11200.0, 2.0], [11300.0, 1.0], [11400.0, 2.0], [11500.0, 2.0], [11600.0, 2.0], [11700.0, 1.0], [11800.0, 3.0], [11900.0, 1.0], [12000.0, 2.0], [12100.0, 2.0], [12200.0, 2.0], [12300.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 194.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 6.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 194.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 17.0, "minX": 1.70806452E12, "maxY": 117.01796407185641, "series": [{"data": [[1.70806452E12, 117.01796407185641], [1.70806458E12, 17.0]], "isOverall": false, "label": "send message", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70806458E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1110.3333333333333, "minX": 1.0, "maxY": 12341.0, "series": [{"data": [[2.0, 12284.0], [3.0, 12240.0], [4.0, 12167.0], [5.0, 12116.0], [6.0, 12070.0], [7.0, 12022.0], [8.0, 11937.0], [9.0, 11873.0], [10.0, 11842.0], [11.0, 11803.0], [12.0, 11765.0], [13.0, 11677.0], [14.0, 11600.0], [15.0, 11561.0], [16.0, 11509.0], [17.0, 11479.0], [18.0, 11423.0], [19.0, 11342.0], [20.0, 11297.0], [21.0, 11245.0], [22.0, 11197.0], [23.0, 11158.0], [24.0, 11077.0], [25.0, 11014.0], [26.0, 10957.0], [27.0, 10907.0], [28.0, 10893.0], [29.0, 10822.0], [30.0, 10751.0], [31.0, 10692.0], [33.0, 10637.0], [32.0, 10644.0], [35.0, 10494.0], [34.0, 10573.0], [37.0, 10370.0], [36.0, 10430.0], [39.0, 10246.0], [38.0, 10343.0], [41.0, 10172.0], [40.0, 10207.0], [43.0, 10057.0], [42.0, 10106.0], [45.0, 9944.0], [44.0, 9980.0], [47.0, 9847.0], [46.0, 9903.0], [49.0, 9730.0], [48.0, 9808.0], [51.0, 9644.0], [50.0, 9686.0], [53.0, 9552.0], [52.0, 9583.0], [55.0, 9412.0], [54.0, 9472.0], [57.0, 9282.0], [56.0, 9382.0], [59.0, 9215.0], [58.0, 9262.0], [61.0, 9112.0], [60.0, 9142.0], [63.0, 8993.0], [62.0, 9020.0], [67.0, 8755.0], [66.0, 8857.0], [65.0, 8887.0], [64.0, 8960.0], [71.0, 8601.0], [70.0, 8629.0], [69.0, 8698.0], [68.0, 8725.0], [75.0, 8368.0], [74.0, 8435.0], [73.0, 8464.0], [72.0, 8491.0], [79.0, 8163.0], [78.0, 8178.0], [77.0, 8234.0], [76.0, 8344.0], [83.0, 7907.0], [82.0, 7978.0], [81.0, 8074.0], [80.0, 8109.0], [87.0, 7723.0], [86.0, 7787.0], [85.0, 7819.0], [84.0, 7867.0], [91.0, 7520.0], [90.0, 7552.0], [89.0, 7610.0], [88.0, 7654.0], [95.0, 7290.0], [94.0, 7353.0], [93.0, 7398.0], [92.0, 7472.0], [99.0, 7092.0], [98.0, 7139.0], [97.0, 7193.0], [96.0, 7241.0], [103.0, 6883.0], [102.0, 6936.0], [101.0, 6986.0], [100.0, 7022.0], [107.0, 6678.0], [106.0, 6727.0], [105.0, 6766.0], [104.0, 6840.0], [111.0, 6454.0], [110.0, 6488.0], [109.0, 6582.0], [108.0, 6630.0], [115.0, 6215.0], [114.0, 6331.0], [113.0, 6371.0], [112.0, 6411.0], [119.0, 6072.0], [118.0, 6108.0], [117.0, 6153.0], [116.0, 6184.0], [123.0, 5844.0], [122.0, 5885.0], [121.0, 5908.0], [120.0, 5937.0], [127.0, 5580.0], [126.0, 5623.0], [125.0, 5667.0], [124.0, 5818.0], [135.0, 5161.0], [134.0, 5237.0], [133.0, 5239.0], [132.0, 5281.0], [131.0, 5346.0], [130.0, 5413.0], [129.0, 5517.0], [128.0, 5522.0], [143.0, 4695.0], [142.0, 4747.0], [141.0, 4840.0], [140.0, 4913.0], [139.0, 4965.0], [138.0, 4973.0], [137.0, 5011.0], [136.0, 5090.0], [151.0, 4310.0], [150.0, 4334.0], [149.0, 4378.0], [148.0, 4408.0], [147.0, 4489.0], [146.0, 4572.0], [145.0, 4623.0], [144.0, 4677.0], [159.0, 3820.0], [158.0, 3877.0], [157.0, 3981.0], [156.0, 4015.0], [155.0, 4028.0], [154.0, 4081.0], [153.0, 4134.0], [152.0, 4238.0], [167.0, 3383.0], [166.0, 3397.0], [165.0, 3445.0], [164.0, 3554.0], [163.0, 3617.0], [162.0, 3707.0], [161.0, 3720.0], [160.0, 3749.0], [175.0, 2952.0], [174.0, 3022.0], [173.0, 3066.0], [172.0, 3119.0], [171.0, 3125.0], [170.0, 3182.0], [169.0, 3282.0], [168.0, 3321.0], [183.0, 2491.0], [182.0, 2469.0], [181.0, 2473.0], [180.0, 2713.0], [179.0, 2792.0], [178.0, 2840.0], [177.0, 2867.0], [176.0, 2875.0], [191.0, 1806.0], [190.0, 1887.0], [189.0, 2070.0], [188.0, 2152.0], [187.0, 2124.0], [186.0, 2107.0], [185.0, 2464.0], [184.0, 2475.0], [197.0, 1382.0], [196.0, 1369.0], [195.0, 1472.0], [194.0, 1509.0], [193.0, 1740.0], [192.0, 1760.0], [200.0, 1110.3333333333333], [1.0, 12341.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[100.51500000000011, 6958.495000000001]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 180.4, "minX": 1.70806452E12, "maxY": 975.2166666666667, "series": [{"data": [[1.70806452E12, 975.2166666666667], [1.70806458E12, 192.73333333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70806452E12, 912.9333333333333], [1.70806458E12, 180.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70806458E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 6068.005988023955, "minX": 1.70806452E12, "maxY": 11464.909090909088, "series": [{"data": [[1.70806452E12, 6068.005988023955], [1.70806458E12, 11464.909090909088]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70806458E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 6067.143712574848, "minX": 1.70806452E12, "maxY": 11464.909090909088, "series": [{"data": [[1.70806452E12, 6067.143712574848], [1.70806458E12, 11464.909090909088]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70806458E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.6407185628742517, "minX": 1.70806452E12, "maxY": 0.7575757575757575, "series": [{"data": [[1.70806452E12, 0.6407185628742517], [1.70806458E12, 0.7575757575757575]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70806458E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1102.0, "minX": 1.70806452E12, "maxY": 12341.0, "series": [{"data": [[1.70806452E12, 10573.0], [1.70806458E12, 12341.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70806452E12, 9694.800000000001], [1.70806458E12, 12210.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70806452E12, 10519.279999999999], [1.70806458E12, 12341.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70806452E12, 10145.6], [1.70806458E12, 12301.1]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.70806452E12, 1102.0], [1.70806458E12, 10637.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70806452E12, 6153.0], [1.70806458E12, 11479.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70806458E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1107.0, "minX": 3.0, "maxY": 11937.0, "series": [{"data": [[16.0, 5551.0], [17.0, 6038.0], [18.0, 8356.0], [3.0, 1107.0], [12.0, 1783.0], [15.0, 11937.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1062.0, "minX": 3.0, "maxY": 11937.0, "series": [{"data": [[16.0, 5551.0], [17.0, 6037.5], [18.0, 8355.5], [3.0, 1062.0], [12.0, 1783.0], [15.0, 11937.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.70806452E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.70806452E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70806452E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.55, "minX": 1.70806452E12, "maxY": 2.783333333333333, "series": [{"data": [[1.70806452E12, 2.783333333333333], [1.70806458E12, 0.55]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70806458E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.55, "minX": 1.70806452E12, "maxY": 2.783333333333333, "series": [{"data": [[1.70806452E12, 2.783333333333333], [1.70806458E12, 0.55]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70806458E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.55, "minX": 1.70806452E12, "maxY": 2.783333333333333, "series": [{"data": [[1.70806452E12, 2.783333333333333], [1.70806458E12, 0.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70806458E12, "title": "Total Transactions Per Second"}},
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

