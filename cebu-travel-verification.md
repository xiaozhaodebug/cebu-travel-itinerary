# 宿务旅行攻略地点与路线核验报告

- 核验时间：2026-09-18
- 核验对象：[cebu-travel-itinerary.html](D:/Ai_workspace/workbuddy/travel/cebu-travel-itinerary.html)
- 本次只生成核验报告，没有修改攻略 HTML。
- Google Maps MCP 配置已加入 `resolve_names`；本报告通过同一 Google Maps MCP 后端完成 `resolveNames`、`search_places`、`compute_routes`。共核对 55 个具名项目。
- Place ID 是 Google Maps 返回的资源标识；“有歧义”表示解析成功但匹配对象不够具体，不等于地点不存在。

## 结论先看

1. **路线的大框架是真实的**：宿务市 → 墨宝 → 奥斯洛布 → Santander/Liloan → Sibulan → Dumaguete → Siquijor → Tagbilaran/Bohol → Cebu Pier 1 均能在 Google Maps 中找到对应地点。
2. **最明确的住宿错误是 Sea Turtle House**：它在 White Beach Looc / Saavedra，不在 Panagsama；D3–4 潜水住宿逻辑不适用。
3. **地图坐标有 6 个重点偏差**：Liloan/Santander 码头、Siquijor Port、Old Enchanted Balete Tree、Salagdoong Beach、Tubod Marine Sanctuary、Chocolate Hills；Bohol Bee Farm 也有明显偏差。
4. **D12 时间表偏紧且有一处明显不成立**：Google 路线显示 Tarsier → Chocolate Hills 约 42.7 km/59 分钟，Chocolate Hills → Bee Farm 约 59.6 km/85 分钟；攻略把两段几乎压成连续景点时间，必须删减或提前。
5. **渡轮班次不能由地点解析证明**。OceanJet 官方页面显示班次与临时取消会变化，攻略里的“末班约 18:30”只能当旧参考，必须按 2026-10-09 已出票班次复核。

## 逐项 Google Maps 核验

| 类别 | 攻略名称 | 置信度 | Google 坐标 | 地图点差异 | 结论 | Place ID |
|---|---|---|---:|---:|---|---|
| route | 深圳北站 | HIGH | 22.6103, 114.0302 | 未比较 | 名称/位置基本准确 | `places/ChIJwXmsVE_zAzQRAQEgt6zHVFk` |
| route | 香港国际机场 HKG | HIGH | 22.3135, 113.9137 | 未比较 | 名称/位置基本准确 | `places/ChIJncZGzPPiAzQRnjaSGIKQ9fk` |
| route | 马尼拉 NAIA T3 | HIGH | 14.5195, 121.0138 | 未比较 | 名称/位置基本准确 | `places/ChIJa_RQBMvOlzMRMW4WSmnJ_c0` |
| route | 宿务机场 CEB | HIGH | 10.3136, 123.9834 | 未比较 | 名称/位置基本准确 | `places/ChIJ3yW9O2GXqTMRwTKES0Vh0Is` |
| route | Cebu South Bus Terminal | HIGH | 10.2976, 123.8935 | 未比较 | 名称/位置基本准确 | `places/ChIJUS73LlaZqTMRXPPNZsZ8Nbg` |
| route | 墨宝 Moalboal | HIGH | 9.9381, 123.3931 | 未比较 | 名称/位置基本准确 | `places/ChIJddRmAWPoqzMReCzQxLVDrCA` |
| route | 奥斯洛布 Oslob | HIGH | 9.5208, 123.4335 | 未比较 | 名称/位置基本准确 | `places/ChIJs4QVusOfqzMRVVjIvFsAVMs` |
| route | Liloan/Santander 码头 | HIGH | 9.4169, 123.3075 | 未比较 | 名称/位置基本准确 | `places/ChIJ-7a-mx5xqzMRR9nmgX5JvTU` |
| route | Sibulan Port | HIGH | 9.3610, 123.2855 | 未比较 | 名称/位置基本准确 | `places/ChIJQ9raIdxvqzMRxsZwOwLLGUI` |
| route | Dumaguete Port | HIGH | 9.3127, 123.3107 | 未比较 | 名称/位置基本准确 | `places/ChIJFR6mXeRuqzMRyAKaoKyDl_U` |
| route | Siquijor Port | HIGH | 9.2180, 123.5123 | 未比较 | 名称/位置基本准确 | `places/ChIJ9z309MUVqzMRRXAkkrjIKpk` |
| route | Tagbilaran Port | HIGH | 9.6489, 123.8468 | 未比较 | 名称/位置基本准确 | `places/ChIJsylq0FRMqjMROmwJjVhenSE` |
| route | Cebu Pier 1 | HIGH | 10.2923, 123.9090 | 未比较 | 名称/位置基本准确 | `places/ChIJ2TImteCbqTMRtRck6dNcgEM` |
| poi | Panagsama Beach / Sardine Run | HIGH | 9.9490, 123.3654 | 0.4 km | 名称/位置基本准确 | `places/ChIJ5XeYhgXpqzMRONj4yDRsKGg` |
| poi | Pescador Island | MEDIUM | 9.9232, 123.3435 | 1.0 km | 有歧义 | `places/ChIJddRmAWPoqzMReCzQxLVDrCA` |
| poi | White Beach / Basdaku | HIGH | 9.9846, 123.3692 | 1.1 km | 地图点需复核 | `places/ChIJpZ1lIxrnqzMR7tzbFuoNDyY` |
| poi | Kawasan Falls | HIGH | 9.8035, 123.3743 | 0.1 km | 名称/位置基本准确 | `places/ChIJzaFdmHHAqzMRzyRjfu-ZeDU` |
| poi | Moalboal Poblacion | MEDIUM | 9.9368, 123.3920 | 0.2 km | 有歧义 | `places/ChIJA9dLvZBvqTMRc7BuamWge34` |
| poi | Osmeña Peak | HIGH | 9.8225, 123.4483 | 0.7 km | 名称/位置基本准确 | `places/ChIJlcApFRrAqzMRxnYM0_zjs7w` |
| poi | Tumalog Falls | HIGH | 9.4860, 123.3696 | 0.4 km | 名称/位置基本准确 | `places/ChIJg2E9ZfN1qzMR1N-Xe5V3dzo` |
| poi | Tan-awan Whale Shark Watching | HIGH | 9.4634, 123.3797 | 0.3 km | 名称/位置基本准确 | `places/ChIJBwm4UkR0qzMR1yMRjqgTPUQ` |
| poi | Sumilon Island | HIGH | 9.4329, 123.3893 | 0.1 km | 名称/位置基本准确 | `places/ChIJw5AWW390qzMR8Aisa_yqH6w` |
| poi | Old Enchanted Balete Tree | HIGH | 9.1209, 123.5754 | 5.2 km | 地图点明显偏离 | `places/ChIJrze_-Ig8qzMRCp6oSjPlVnM` |
| poi | Cambugahay Falls | HIGH | 9.1399, 123.6267 | 0.2 km | 名称/位置基本准确 | `places/ChIJn1zLoigjqzMR40KNXYJk7b0` |
| poi | Salagdoong Beach | HIGH | 9.2131, 123.6816 | 4.8 km | 地图点明显偏离 | `places/ChIJNQrXgBcZqzMR5OBP7w_7CKQ` |
| poi | Paliton Beach | HIGH | 9.1779, 123.4616 | 0.8 km | 名称/位置基本准确 | `places/ChIJkSP8YcA_qzMRCqIU_uOwWHc` |
| poi | Tubod Marine Sanctuary | HIGH | 9.1416, 123.5091 | 5.4 km | 地图点明显偏离 | `places/ChIJB7oJNJ8-qzMRGbaC5ZFr-cc` |
| poi | Alona Beach | HIGH | 9.5486, 123.7740 | 0.2 km | 名称/位置基本准确 | `places/ChIJp3TlMp-sqzMR4VhodDXL50g` |
| poi | Philippine Tarsier Sanctuary | HIGH | 9.6908, 123.9527 | 0.0 km | 名称/位置基本准确 | `places/ChIJiygR7CVJqjMRN6KOwTPZm78` |
| poi | Chocolate Hills | HIGH | 9.7986, 124.1675 | 4.6 km | 地图点明显偏离 | `places/ChIJ93JdpqE9qjMRZ90HM2qFnNg` |
| poi | Bohol Bee Farm | HIGH | 9.5757, 123.8271 | 2.4 km | 地图点需复核 | `places/ChIJ_____9xSqjMRIDZu57H5Pj8` |
| poi | Baclayon Church | HIGH | 9.6226, 123.9122 | 未比较 | 名称/位置基本准确 | `places/ChIJw_CRaj9OqjMRSbQIIGXN6uI` |
| poi | Blood Compact Shrine | HIGH | 9.6273, 123.8788 | 未比较 | 名称/位置基本准确 | `places/ChIJTS6i9t1NqjMRd2Zq2VhChxw` |
| poi | Butterfly Conservation Center | MEDIUM | 9.6130, 124.0224 | 未比较 | 有歧义 | `places/ChIJq3__J2dAqjMRlZN3DORnISM` |
| poi | Carbon Market | HIGH | 10.2914, 123.8991 | 0.2 km | 名称/位置基本准确 | `places/ChIJkw4YkuSbqTMRj-KNt73Rp_w` |
| poi | Taboan Public Market | HIGH | 10.2955, 123.8911 | 0.9 km | 名称/位置基本准确 | `places/ChIJocIZfv6bqTMRMHD_dmj-wqg` |
| poi | Colon Street | HIGH | 10.2967, 123.8990 | 0.2 km | 名称/位置基本准确 | `places/ChIJJ1lXkeKbqTMR57n3HvmTgZo` |
| poi | Cebu IT Park | HIGH | 10.3273, 123.9063 | 0.3 km | 名称/位置基本准确 | `places/ChIJzQIV3CGZqTMRlWk_9p1F2hQ` |
| poi | Ayala Center Cebu | HIGH | 10.3182, 123.9052 | 0.0 km | 名称/位置基本准确 | `places/ChIJa9Ru7kCZqTMRxxXvO_Ddfb0` |
| poi | SM City Cebu | HIGH | 10.3114, 123.9178 | 0.0 km | 名称/位置基本准确 | `places/ChIJu5dH8GyZqTMRSC9ixmg-G7k` |
| poi | Intramuros | HIGH | 14.5896, 120.9747 | 0.0 km | 名称/位置基本准确 | `places/ChIJ--F1Ez3KlzMRCLrAWKa_ngQ` |
| poi | BGC High Street | HIGH | 14.5507, 121.0504 | 0.0 km | 名称/位置基本准确 | `places/ChIJPSRB9O7IlzMRyWGILpcpHEs` |
| hotel | Pacific Pensionne | MEDIUM | 10.3055, 123.8954 | 未比较 | 有歧义 | `places/ChIJHWHRXVCZqTMREpGQ28OUiuo` |
| hotel | One Central Hotel Cebu | HIGH | 10.2974, 123.8958 | 未比较 | 名称/位置基本准确 | `places/ChIJBy7GWP2bqTMRcwxWh2mqUnU` |
| hotel | Palm Grass Hotel Cebu | MEDIUM | 10.2985, 123.9000 | 未比较 | 有歧义 | `places/ChIJiQGd9liZqTMRX8l9J4jjUPU` |
| hotel | Goldberry Suites Cebu | HIGH | 10.3211, 123.9679 | 未比较 | 名称/位置基本准确 | `places/ChIJ7UNUFtGZqTMRM1MLoQ1gSMk` |
| hotel | BAI Hotel Cebu | HIGH | 10.3248, 123.9368 | 未比较 | 名称/位置基本准确 | `places/ChIJIQUXxK6ZqTMR4GNoEFEgLjs` |
| hotel | Neptune Diving Resort Moalboal | HIGH | 9.9484, 123.3661 | 未比较 | 名称/位置基本准确 | `places/ChIJg5dcOsHoqzMRXkE2NdP1jVk` |
| hotel | Garden Village Resort Moalboal | HIGH | 9.9414, 123.3851 | 未比较 | 名称/位置基本准确 | `places/ChIJ-ezHqfDoqzMRnNc91EJOYR8` |
| hotel | Herbs Guest House | HIGH | 9.9354, 123.3762 | 未比较 | 名称/位置基本准确 | `places/ChIJMQNFm-HoqzMRnrNY1HmRIt8` |
| hotel | Sea Turtle House Moalboal | HIGH | 9.9784, 123.3708 | 未比较 | 名称/位置基本准确 | `places/ChIJlfShASLmqzMRIiOL9qGgeN8` |
| hotel | Bluewater Sumilon Island Resort | HIGH | 9.4336, 123.3907 | 未比较 | 名称/位置基本准确 | `places/ChIJNZwFGWmfqzMRh9aIjJxvJ6s` |
| hotel | Coco Grove Beach Resort | HIGH | 9.1421, 123.5120 | 未比较 | 名称/位置基本准确 | `places/ChIJDw1J-o0-qzMRKm3cSamqnVk` |
| hotel | Henann Resort Alona Beach | HIGH | 9.5508, 123.7746 | 未比较 | 名称/位置基本准确 | `places/ChIJGbB5VqKsqzMR5uM4cE4UYv4` |
| hotel | Bohol Beach Club | HIGH | 9.5544, 123.8016 | 未比较 | 名称/位置基本准确 | `places/ChIJvcTYYAetqzMRVuhC3qsYq1Y` |

坐标比较基准来自攻略地图脚本 [cebu-travel-itinerary.html:2780](D:/Ai_workspace/workbuddy/travel/cebu-travel-itinerary.html:2780) 至 [cebu-travel-itinerary.html:2825](D:/Ai_workspace/workbuddy/travel/cebu-travel-itinerary.html:2825)。路线节点是城市/岛屿级抽象点时，不应把它当作具体码头或酒店入口。

## 住宿重点

| 住宿 | Google 结果 | 判断 |
|---|---|---|
| Pacific Pensionne | **Pacific Pensionne House** [0] (3.6★, 465) is a low-key budget hotel located at 313-A Jones Avenue, Osmeña Blvd, Cebu City, 6000 Cebu, offering basic quarters—some featuring bunk beds—along | 名称与地点均有 Google Maps 匹配；仍需按实际入住日期确认房态、地址和接送。 |
| One Central Hotel Cebu | **One Central Hotel** [0] (4.1★, 1649) is a relaxed property featuring simply decorated quarters, an outdoor pool, a gym, and city views. | 名称与地点均有 Google Maps 匹配；仍需按实际入住日期确认房态、地址和接送。 |
| Palm Grass Hotel Cebu | **Palm Grass The Cebu Heritage Hotel** [0] (4.0★, 752) is a relaxed hotel featuring a cafe, an exercise area, and a roof terrace equipped with a bar and a plunge pool. | 名称与地点均有 Google Maps 匹配；仍需按实际入住日期确认房态、地址和接送。 |
| Goldberry Suites Cebu | **Goldberry Suites & Hotel Mactan** [0] (4.0★, 802) is a modern hotel featuring relaxed rooms and suites, offering convenient amenities such as free Wi-Fi, breakfast, parking, and a spa. | 名称与地点均有 Google Maps 匹配；仍需按实际入住日期确认房态、地址和接送。 |
| BAI Hotel Cebu | **bai Hotel Cebu** [0] (4.8★, 17468) is a sophisticated hotel situated at Ouano Avenue, corner C.D.Seno, Mandaue, 6014 Cebu, featuring sophisticated quarters in an elegant property. Visitors | 名称与地点均有 Google Maps 匹配；仍需按实际入住日期确认房态、地址和接送。 |
| Neptune Diving Resort Moalboal | **Neptune Diving Resort Moalboal** [0] (4.7★, 420) is a hotel located at W9X8+99G, Panagsama Beach, Basdiot, Moalboal, 6032 Cebu, operating Monday through Sunday from 8AM to 6PM. Visitors me | 名称与地点均有 Google Maps 匹配；仍需按实际入住日期确认房态、地址和接送。 |
| Garden Village Resort Moalboal | **Garden Village Resort** [0] (4.4★, 423) is a resort hotel located on Panagsama Rd, Poblacion West, Moalboal, 6032 Cebu, offering amenities such as a check-in desk, room service, and food a | Google 返回 Panagsama Rd, Poblacion West；名称和区域基本正确，但坐标距 Panagsama 沙丁鱼点约 2.4 km，“步行几分钟到沙滩”偏乐观，建议改为短程车/步行约 25–35 分钟并以实际入口为准。 |
| Herbs Guest House | **Herbs Guest House** [0] (4.5★, 161) is a cozy hotel located on Tongo Point Road Tongo in Moalboal, Cebu, operating 24 hours daily. The property features quaint bungalows and cozy rooms in  | Google 返回 Tongo Point Road Tongo；Booking 写明约 20 分钟步行到 Panagsama Beach。名称真实，但“主潜店区步行可达”需改成约 20–30 分钟步行或短程车。 |
| Sea Turtle House Moalboal | **Sea Turtle House Beach Resort Moalboal** [0] (3.5★, 127) is a beachfront hotel located at White Beach Looc, Moalboal, 6032 Cebu, offering direct beach access and a less crowded atmosphere  | 攻略第 1432–1435 行写成“Panagsama 临水”。Google 返回 White Beach Looc；Booking 地址为 130 Looc, White Beach, Barangay Saavedra。应改为 White Beach/Looc，不能当作 Panagsama 潜水住宿。 |
| Bluewater Sumilon Island Resort | **Bluewater Sumilon Island Resort** [0] (4.5★, 1657) is a casual retreat in Oslob, Cebu, offering relaxed rooms and villas, a thatched restaurant, a spa, and a beach bar. Visitors can enjoy  | 名称与地点均有 Google Maps 匹配；仍需按实际入住日期确认房态、地址和接送。 |
| Coco Grove Beach Resort | **Coco Grove Beach Resort** [0] (4.5★, 1954) is a relaxed casual retreat featuring relaxed rooms and suites, 3 restaurants, 3 pools, and boat excursions. Located in Tubod, San Juan, Siquijor | 名称与地点均有 Google Maps 匹配；仍需按实际入住日期确认房态、地址和接送。 |
| Henann Resort Alona Beach | **Henann Resort Alona Beach** [0] (4.5★, 7349) Airy quarters in a swanky resort with a private beach area, dining & a spa, plus 3 outdoor pools. | 名称与地点均有 Google Maps 匹配；仍需按实际入住日期确认房态、地址和接送。 |
| Bohol Beach Club | **Bohol Beach Club** [0] (4.6★, 2378) is a tropical beachside resort located on Bo. Bolod Island of Panglao, offering stylish rooms, an outdoor pool, and a classic restaurant. | 名称与地点均有 Google Maps 匹配；仍需按实际入住日期确认房态、地址和接送。 |

攻略中以下并非具体酒店，不能算“地址已核实”：`Tan-awan 海边民宿`、`Oslob 度假村`、`San Juan 海边民宿`、`雨林/泳池度假村`、`Alona Beach 民宿`、`Dumaluan 侧度假村`、`Cebu 市区酒店/商场附近酒店`。预订前必须补充具体酒店名、地址和取消政策。

## 关键陆路路线

| 路段 | Google Maps MCP DRIVE | 对攻略的判断 |
|---|---:|---|
| Cebu South Bus Terminal → Moalboal Poblacion | 86.3 km / 9196s | 可作为陆路数量级参考；实际受交通、停站和天气影响。 |
| Panagsama Beach Sardine Run Moalboal Cebu Philippines → Tan-awan Whale Shark Watching Oslob Cebu Philippines | 79.2 km / 6909s | 可作为陆路数量级参考；实际受交通、停站和天气影响。 |
| Tan-awan Whale Shark Watching Oslob Cebu Philippines → Liloan Port Santander Cebu Philippines | 11.6 km / 1274s | 可作为陆路数量级参考；实际受交通、停站和天气影响。 |
| Sibulan Port Negros Oriental Philippines → Dumaguete Port Negros Oriental Philippines | 7.2 km / 1128s | 包含/涉及跨岛移动，不能用 DRIVE 结果证明船班或末班船；按已出票船班复核。 |
| Dumaguete Port Negros Oriental Philippines → Siquijor Port Philippines | 66.3 km / 11120s | 包含/涉及跨岛移动，不能用 DRIVE 结果证明船班或末班船；按已出票船班复核。 |
| Siquijor Port Philippines → Tagbilaran Port Bohol Philippines | 71.2 km / 11065s | 包含/涉及跨岛移动，不能用 DRIVE 结果证明船班或末班船；按已出票船班复核。 |
| Tagbilaran Port Bohol Philippines → Cebu Pier 1 Philippines | 88.2 km / 11758s | 包含/涉及跨岛移动，不能用 DRIVE 结果证明船班或末班船；按已出票船班复核。 |
| Philippine Tarsier Sanctuary Corella Bohol Philippines → Chocolate Hills Carmen Bohol Philippines | 42.7 km / 3552s | D12 重点核查段；该结果显示行程需要重新留出转场时间。 |
| Chocolate Hills Carmen Bohol Philippines → Bohol Bee Farm Dauis Panglao Bohol Philippines | 59.6 km / 5110s | D12 重点核查段；该结果显示行程需要重新留出转场时间。 |
| Bohol Bee Farm Dauis Panglao Bohol Philippines → Tagbilaran Port Bohol Philippines | 14.1 km / 1882s | D12 重点核查段；该结果显示行程需要重新留出转场时间。 |
| Pacific Pensionne Cebu City Philippines → Cebu South Bus Terminal Cebu City Philippines | 1.4 km / 407s | 可作为陆路数量级参考；实际受交通、停站和天气影响。 |
| Herbs Guest House Moalboal Cebu Philippines → Neptune Diving Resort Moalboal Cebu Philippines | 2.9 km / 607s | 约 2.9 km，说明可到达，但“步行可达”应写成约 20–30 分钟或短程车。 |

### D12 时间审计

- 攻略原文位置：[D12 2381–2416](D:/Ai_workspace/workbuddy/travel/cebu-travel-itinerary.html:2381)。
- Tarsier Sanctuary → Chocolate Hills：约 42.7 km、59 分钟；攻略写成 09:30 紧接 11:00 景点结束，几乎没有上下车和停车余量。
- Chocolate Hills → Bohol Bee Farm：约 59.6 km、85 分钟；攻略只留 30 分钟左右转场，不成立。
- Bee Farm → Tagbilaran Port：约 14.1 km、31 分钟；这一段可行，但要留行李、安检和堵车缓冲。
- Bohol 省旅游局把包含眼镜猴、血盟碑、Baclayon Church 和巧克力山的经典乡村线说明为约 8 小时私人车行程；攻略 D12 还叠加 Bee Farm、蝴蝶点和傍晚船，建议把 Bee Farm 或蝴蝶点改为备选。

## 建议更正清单

- **Sea Turtle House Moalboal**：攻略第 1432–1435 行写成“Panagsama 临水”。Google 返回 White Beach Looc；Booking 地址为 130 Looc, White Beach, Barangay Saavedra。应改为 White Beach/Looc，不能当作 Panagsama 潜水住宿。
- **Garden Village Resort Moalboal**：Google 返回 Panagsama Rd, Poblacion West；名称和区域基本正确，但坐标距 Panagsama 沙丁鱼点约 2.4 km，“步行几分钟到沙滩”偏乐观，建议改为短程车/步行约 25–35 分钟并以实际入口为准。
- **Herbs Guest House**：Google 返回 Tongo Point Road Tongo；Booking 写明约 20 分钟步行到 Panagsama Beach。名称真实，但“主潜店区步行可达”需改成约 20–30 分钟步行或短程车。
- **Liloan/Santander 码头**：Google 解析到 Liloan Santander Port（约 9.4169,123.3075）；攻略地图 Santander 节点约 9.2555,123.3607，是城镇级点位，离实际码头约 19 km。D8 地图应改用具体 Liloan Port。
- **Siquijor Port**：Google 返回约 9.2180,123.5123；攻略 Siquijor 节点约 9.1606,123.4933，更像岛屿/城镇级中心。若表达渡轮路线，必须把终点改成 Siquijor Port。
- **Old Enchanted Balete Tree**：攻略点约 9.1553,123.6071，Google 返回约 9.1209,123.5754，差约 5 km；地图点需要复核/替换。
- **Salagdoong Beach**：攻略点约 9.1698,123.6862，Google 返回约 9.2131,123.6816，差约 4.8 km；名称真实但地图点明显偏南。
- **Tubod Marine Sanctuary**：攻略点约 9.1750,123.4730，Google 返回约 9.1416,123.5091，差约 5.7 km；应以实际潜店/保护区入口的预约地址为准。
- **Chocolate Hills**：攻略点约 9.8297,124.1397，Google 返回 Chocolate Hills Complex 约 9.7986,124.1675，差约 4.6 km；路线应使用 Carmen 的具体观景台，而不是泛化点。
- **Bohol Bee Farm**：攻略点约 9.5859,123.8073，Google 返回 Dao, Dauis 约 9.5757,123.8271，差约 2.4 km；名称真实，地图点需改到 Dao 门店/农场入口。
- **Butterfly Conservation Center**：Google 以中置信度匹配到 Loboc 的 Bohol Birds and Butterfly Kingdom，不能证明就是攻略中的 Butterfly Conservation Center；需在预订包车前确认具体名称和地址。

## 来源与复查

- [Google Maps Grounding Lite resolveNames 文档](https://developers.google.com/maps/ai/grounding-lite/reference/mcp/resolve_names)：说明每批最多 20 个地点，并返回匹配置信度。
- [Sea Turtle House Booking 地址](https://www.booking.com/hotel/ph/sea-turtle-house-moalboal.en-gb.html)：130 Looc, White Beach, Barangay Saavedra。
- [Garden Village Resort Google Hotels 地址](https://www.google.com.pk/travel/hotels/entity/ChkInK_3oa3I07AfGg0vZy8xMWM2MDNnOWM3EAE)：Panagsama Rd, Poblacion West。
- [Herbs Guest House Booking 信息](https://www.booking.com/hotel/ph/herbs-guest-house.html)：Tongo Road，并写明步行到 Panagsama Beach 约 20 分钟。
- [Bohol Provincial Tourism Office countryside tour](https://tourism.bohol.gov.ph/countryside-tour/)：官方说明经典乡村线约 8 小时，并列出 Corella 眼镜猴、血盟碑、Baclayon Church、巧克力山等点。
- [Bohol Provincial Tourism Office Corella](https://tourism.bohol.gov.ph/visitbohol-corella-3/)：眼镜猴保护区地址为 km.14, Canapnapan, Corella, Bohol。
- [OceanJet 官方页面](https://oceanjetph.com/)：班次、燃油附加费与临时取消会调整；不要把 HTML 中的末班时间当成锁定事实。

## 结论

攻略不是“整条路线错误”，而是**地点名称大多真实，地图的若干坐标和住宿区域描述需要修正，D12 需要重排**。最优先处理顺序是：Sea Turtle House 位置、Liloan/Santander 与 Siquijor 两个港口点、Siquijor 五个偏差景点、Chocolate Hills/Bee Farm 坐标，以及 D12 行程压缩问题。