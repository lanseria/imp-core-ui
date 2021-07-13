import {
  resultSuccess,
  resultError,
  getRequestToken,
  requestParams
} from "../_util";
import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/basic-api/admin/dict/get_all_map",
    timeout: 1000,
    method: "get",
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) {
        return resultError("Invalid token!");
      }
      return resultSuccess({
        CITYLEVEL: [
          {
            id: 741,
            value: "1",
            label: "省级",
            createTime: "2019-07-05 15:39:33",
            updateTime: "2019-07-05 15:39:33",
            sort: 0,
            children: []
          },
          {
            id: 742,
            value: "2",
            label: "市级",
            createTime: "2019-07-05 15:39:33",
            updateTime: "2019-07-05 15:39:33",
            sort: 0,
            children: []
          },
          {
            id: 743,
            value: "3",
            label: "县级",
            createTime: "2019-07-05 15:39:33",
            updateTime: "2019-07-05 15:39:33",
            sort: 0,
            children: []
          }
        ],
        prms_project_stage: [
          {
            id: 697,
            value: "1",
            label: "初步意向",
            createTime: "2019-06-28 14:15:59",
            updateTime: "2019-06-28 14:15:59",
            sort: 1,
            children: []
          },
          {
            id: 698,
            value: "2",
            label: "方案递交",
            createTime: "2019-06-28 14:16:57",
            updateTime: "2019-06-28 14:16:57",
            sort: 1,
            children: []
          },
          {
            id: 699,
            value: "3",
            label: "正在执行",
            createTime: "2019-06-28 14:16:26",
            updateTime: "2019-06-28 14:16:26",
            sort: 1,
            children: []
          },
          {
            id: 703,
            value: "4",
            label: "项目完结",
            createTime: "2019-06-28 14:16:39",
            updateTime: "2019-06-28 14:16:39",
            sort: 1,
            children: []
          },
          {
            id: 967,
            value: "5",
            label: "项目搁置",
            createTime: "2019-07-11 15:46:47",
            updateTime: "2019-07-11 15:46:47",
            sort: 1,
            children: []
          },
          {
            id: 968,
            value: "6",
            label: "项目失败",
            createTime: "2019-07-11 15:47:10",
            updateTime: "2019-07-11 15:47:10",
            sort: 1,
            children: []
          }
        ],
        COMMON_ORG_RELATION: [
          {
            id: 1205,
            value: "1",
            label: "客户",
            createTime: "2019-11-20 16:54:04",
            updateTime: "2019-11-20 16:54:04",
            sort: 1,
            children: []
          }
        ],
        hrms_resume_source: [
          {
            id: 17,
            value: "1",
            label: "新员工推荐",
            createTime: "2019-03-08 22:33:00",
            updateTime: "2019-03-08 22:33:00",
            sort: 1,
            children: []
          },
          {
            id: 18,
            value: "2",
            label: "老员工回归",
            createTime: "2019-03-08 22:33:09",
            updateTime: "2019-03-08 22:33:09",
            sort: 1,
            children: []
          },
          {
            id: 19,
            value: "3",
            label: "专家推荐",
            createTime: "2019-03-08 22:33:19",
            updateTime: "2019-03-08 22:33:19",
            sort: 1,
            children: []
          },
          {
            id: 20,
            value: "4",
            label: "自主提交",
            createTime: "2019-03-08 22:33:33",
            updateTime: "2019-03-08 22:33:33",
            sort: 1,
            children: []
          }
        ],
        admin_user_status: [
          {
            id: 1390,
            value: "0",
            label: "正常",
            createTime: "2021-05-12 17:11:10",
            updateTime: "2021-05-12 17:11:10",
            sort: 1,
            children: []
          },
          {
            id: 1391,
            value: "1",
            label: "待审核",
            createTime: "2021-05-12 17:11:16",
            updateTime: "2021-05-12 17:11:16",
            sort: 1,
            children: []
          },
          {
            id: 1392,
            value: "2",
            label: "锁定",
            createTime: "2021-05-12 17:11:21",
            updateTime: "2021-05-12 17:11:21",
            sort: 1,
            children: []
          },
          {
            id: 1393,
            value: "3",
            label: "待配置",
            createTime: "2021-05-12 17:11:25",
            updateTime: "2021-05-12 17:11:25",
            sort: 1,
            children: []
          }
        ],
        hrms_levae_type: [
          {
            id: 65,
            value: "1",
            label: "事假",
            createTime: "2019-04-26 04:58:10",
            updateTime: "2019-04-26 04:58:10",
            sort: 1,
            children: []
          },
          {
            id: 66,
            value: "2",
            label: "病假",
            createTime: "2019-04-26 04:57:03",
            updateTime: "2019-04-26 04:57:03",
            sort: 2,
            children: []
          },
          {
            id: 68,
            value: "4",
            label: "调休",
            createTime: "2019-04-26 04:57:13",
            updateTime: "2019-04-26 04:57:13",
            sort: 3,
            children: []
          },
          {
            id: 67,
            value: "3",
            label: "年假",
            createTime: "2019-04-26 04:57:17",
            updateTime: "2019-04-26 04:57:17",
            sort: 4,
            children: []
          },
          {
            id: 69,
            value: "5",
            label: "婚假",
            createTime: "2019-04-16 05:24:46",
            updateTime: "2019-04-16 05:24:46",
            sort: 5,
            children: []
          },
          {
            id: 415,
            value: "11",
            label: "产检假",
            createTime: "2019-04-26 04:57:28",
            updateTime: "2019-04-26 04:57:28",
            sort: 6,
            children: []
          },
          {
            id: 70,
            value: "6",
            label: "产假",
            createTime: "2019-04-26 04:57:36",
            updateTime: "2019-04-26 04:57:36",
            sort: 7,
            children: []
          },
          {
            id: 72,
            value: "8",
            label: "哺乳假",
            createTime: "2019-04-26 04:57:38",
            updateTime: "2019-04-26 04:57:38",
            sort: 8,
            children: []
          },
          {
            id: 414,
            value: "10",
            label: "陪产假",
            createTime: "2019-04-26 04:58:21",
            updateTime: "2019-04-26 04:58:21",
            sort: 8,
            children: []
          },
          {
            id: 71,
            value: "7",
            label: "丧假",
            createTime: "2019-04-26 04:57:43",
            updateTime: "2019-04-26 04:57:43",
            sort: 9,
            children: []
          },
          {
            id: 73,
            value: "9",
            label: "其它",
            createTime: "2019-04-26 04:57:47",
            updateTime: "2019-04-26 04:57:47",
            sort: 10,
            children: []
          }
        ],
        hrms_evaluation_type: [
          {
            id: 1366,
            value: "1",
            label: "指标评价",
            createTime: "2021-04-29 16:40:03",
            updateTime: "2021-04-29 16:40:03",
            sort: 1,
            children: []
          },
          {
            id: 1367,
            value: "2",
            label: "整体评价",
            createTime: "2021-04-29 16:40:09",
            updateTime: "2021-04-29 16:40:09",
            sort: 1,
            children: []
          }
        ],
        prms_project_level: [
          {
            id: 659,
            value: "1",
            label: "重要项目",
            createTime: "2019-06-05 15:58:31",
            updateTime: "2019-06-05 15:58:31",
            sort: 1,
            children: []
          },
          {
            id: 660,
            value: "2",
            label: "中级项目",
            createTime: "2019-06-17 15:37:11",
            updateTime: "2019-06-17 15:37:11",
            sort: 2,
            children: []
          },
          {
            id: 661,
            value: "3",
            label: "一般项目",
            createTime: "2019-06-05 15:58:41",
            updateTime: "2019-06-05 15:58:41",
            sort: 3,
            children: []
          }
        ],
        测试JEST: [],
        exam_question_type: [
          {
            id: 1211,
            value: "RADIO",
            label: "单选题",
            createTime: "2021-03-04 09:04:46",
            updateTime: "2021-03-04 09:04:46",
            sort: 1,
            children: []
          },
          {
            id: 1212,
            value: "CHECKBOX",
            label: "多选题",
            createTime: "2021-03-04 09:04:59",
            updateTime: "2021-03-04 09:04:59",
            sort: 2,
            children: []
          },
          {
            id: 1213,
            value: "CHECKED",
            label: "判断题",
            createTime: "2021-03-04 09:05:18",
            updateTime: "2021-03-04 09:05:18",
            sort: 3,
            children: []
          },
          {
            id: 1214,
            value: "GAPFILLING",
            label: "填空题",
            createTime: "2021-03-04 09:05:32",
            updateTime: "2021-03-04 09:05:32",
            sort: 4,
            children: []
          },
          {
            id: 1215,
            value: "ESSAYQUESTION",
            label: "问答题",
            createTime: "2021-03-04 09:05:48",
            updateTime: "2021-03-04 09:05:48",
            sort: 5,
            children: []
          }
        ],
        IS_NORMAL: [
          {
            id: 739,
            value: "0",
            label: "否",
            createTime: "2019-07-05 15:33:16",
            updateTime: "2019-07-05 15:33:16",
            sort: 0,
            children: []
          },
          {
            id: 740,
            value: "9",
            label: "是",
            createTime: "2019-07-05 15:33:16",
            updateTime: "2019-07-05 15:33:16",
            sort: 0,
            children: []
          }
        ],
        hrms_fringe_benefits: [
          {
            id: 527,
            value: "1",
            label: "五险一金",
            createTime: "2019-04-26 22:26:11",
            updateTime: "2019-04-26 22:26:11",
            sort: 1,
            children: []
          },
          {
            id: 528,
            value: "2",
            label: "全勤奖",
            createTime: "2019-04-26 22:26:23",
            updateTime: "2019-04-26 22:26:23",
            sort: 1,
            children: []
          },
          {
            id: 529,
            value: "3",
            label: "感恩基金",
            createTime: "2019-04-26 22:26:33",
            updateTime: "2019-04-26 22:26:33",
            sort: 1,
            children: []
          },
          {
            id: 530,
            value: "4",
            label: "年底双薪",
            createTime: "2019-04-26 22:26:46",
            updateTime: "2019-04-26 22:26:46",
            sort: 1,
            children: []
          },
          {
            id: 531,
            value: "5",
            label: "带薪年假",
            createTime: "2019-04-26 22:26:58",
            updateTime: "2019-04-26 22:26:58",
            sort: 1,
            children: []
          },
          {
            id: 532,
            value: "6",
            label: "绩效奖金",
            createTime: "2019-04-26 22:27:08",
            updateTime: "2019-04-26 22:27:08",
            sort: 1,
            children: []
          },
          {
            id: 533,
            value: "7",
            label: "加班补助",
            createTime: "2019-04-26 22:27:19",
            updateTime: "2019-04-26 22:27:19",
            sort: 1,
            children: []
          },
          {
            id: 534,
            value: "8",
            label: "周末双休",
            createTime: "2019-04-26 22:28:51",
            updateTime: "2019-04-26 22:28:51",
            sort: 1,
            children: []
          },
          {
            id: 535,
            value: "9",
            label: "节日福利",
            createTime: "2019-04-26 22:29:11",
            updateTime: "2019-04-26 22:29:11",
            sort: 1,
            children: []
          },
          {
            id: 536,
            value: "10",
            label: "补充医疗",
            createTime: "2019-04-26 22:29:24",
            updateTime: "2019-04-26 22:29:24",
            sort: 1,
            children: []
          },
          {
            id: 537,
            value: "11",
            label: "定期体检",
            createTime: "2019-04-26 22:29:36",
            updateTime: "2019-04-26 22:29:36",
            sort: 1,
            children: []
          },
          {
            id: 538,
            value: "12",
            label: "专业培训",
            createTime: "2019-04-26 22:30:11",
            updateTime: "2019-04-26 22:30:11",
            sort: 1,
            children: []
          },
          {
            id: 539,
            value: "13",
            label: "股权激励",
            createTime: "2019-04-26 22:32:56",
            updateTime: "2019-04-26 22:32:56",
            sort: 1,
            children: []
          },
          {
            id: 540,
            value: "14",
            label: "其他",
            createTime: "2019-04-26 22:33:14",
            updateTime: "2019-04-26 22:33:14",
            sort: 1,
            children: []
          }
        ],
        exam_certificate_level: [
          {
            id: 1216,
            value: "1",
            label: "初级",
            createTime: "2021-03-04 09:07:31",
            updateTime: "2021-03-04 09:07:31",
            sort: 1,
            children: []
          },
          {
            id: 1217,
            value: "2",
            label: "中级",
            createTime: "2021-03-04 09:07:27",
            updateTime: "2021-03-04 09:07:27",
            sort: 2,
            children: []
          },
          {
            id: 1218,
            value: "3",
            label: "高级",
            createTime: "2021-03-04 09:07:24",
            updateTime: "2021-03-04 09:07:24",
            sort: 3,
            children: []
          }
        ],
        hrms_assessment_result_announce: [
          {
            id: 1381,
            value: "1",
            label: "人事管理手动公示",
            createTime: "2021-05-10 09:28:33",
            updateTime: "2021-05-10 09:28:33",
            sort: 1,
            children: []
          },
          {
            id: 1382,
            value: "2",
            label: "考核结束自动公示",
            createTime: "2021-05-10 09:28:41",
            updateTime: "2021-05-10 09:28:41",
            sort: 1,
            children: []
          },
          {
            id: 1383,
            value: "3",
            label: "不公示",
            createTime: "2021-05-10 09:28:47",
            updateTime: "2021-05-10 09:28:47",
            sort: 1,
            children: []
          }
        ],
        fams_reward_reason: [
          {
            id: 621,
            value: "1",
            label: "项目提成",
            createTime: "2019-05-23 14:57:48",
            updateTime: "2019-05-23 14:57:48",
            sort: 1,
            children: []
          },
          {
            id: 622,
            value: "2",
            label: "日常表扬",
            createTime: "2019-05-23 14:57:57",
            updateTime: "2019-05-23 14:57:57",
            sort: 1,
            children: []
          },
          {
            id: 623,
            value: "3",
            label: "任务奖励",
            createTime: "2019-05-23 14:58:12",
            updateTime: "2019-05-23 14:58:12",
            sort: 1,
            children: []
          },
          {
            id: 624,
            value: "4",
            label: "节日福利",
            createTime: "2019-05-23 14:58:21",
            updateTime: "2019-05-23 14:58:21",
            sort: 1,
            children: []
          },
          {
            id: 625,
            value: "5",
            label: "优秀表彰",
            createTime: "2019-05-23 14:58:31",
            updateTime: "2019-05-23 14:58:31",
            sort: 1,
            children: []
          },
          {
            id: 626,
            value: "6",
            label: "评选奖励",
            createTime: "2019-05-23 14:58:42",
            updateTime: "2019-05-23 14:58:42",
            sort: 1,
            children: []
          },
          {
            id: 627,
            value: "7",
            label: "其他",
            createTime: "2019-05-23 14:58:59",
            updateTime: "2019-05-23 14:58:59",
            sort: 1,
            children: []
          }
        ],
        edu_personnel_category: [
          {
            id: 1318,
            value: "1",
            label: "教学人员",
            createTime: "2021-04-19 15:54:16",
            updateTime: "2021-04-19 15:54:16",
            sort: 1,
            children: []
          },
          {
            id: 1319,
            value: "2",
            label: "管理人员",
            createTime: "2021-04-19 15:54:23",
            updateTime: "2021-04-19 15:54:23",
            sort: 1,
            children: []
          },
          {
            id: 1320,
            value: "3",
            label: "后勤人员",
            createTime: "2021-04-19 15:54:29",
            updateTime: "2021-04-19 15:54:29",
            sort: 1,
            children: []
          }
        ],
        DECLARE_MODE: [
          {
            id: 766,
            value: "1",
            label: "事前",
            createTime: "2019-07-05 15:47:10",
            updateTime: "2019-07-05 15:47:10",
            sort: 1,
            children: []
          },
          {
            id: 767,
            value: "2",
            label: "事后",
            createTime: "2019-07-05 15:47:10",
            updateTime: "2019-07-05 15:47:10",
            sort: 2,
            children: []
          },
          {
            id: 768,
            value: "3",
            label: "其他",
            createTime: "2019-07-05 15:47:10",
            updateTime: "2019-07-05 15:47:10",
            sort: 3,
            children: []
          }
        ],
        hrms_training_mode: [
          {
            id: 53,
            value: "1",
            label: "线上微信",
            createTime: "2019-03-15 09:56:39",
            updateTime: "2019-03-15 09:56:39",
            sort: 1,
            children: []
          },
          {
            id: 54,
            value: "2",
            label: "线上QQ",
            createTime: "2019-03-15 09:56:49",
            updateTime: "2019-03-15 09:56:49",
            sort: 1,
            children: []
          },
          {
            id: 55,
            value: "3",
            label: "线下会议",
            createTime: "2019-03-15 09:57:00",
            updateTime: "2019-03-15 09:57:00",
            sort: 1,
            children: []
          },
          {
            id: 56,
            value: "4",
            label: "视频教学",
            createTime: "2019-03-15 09:57:09",
            updateTime: "2019-03-15 09:57:09",
            sort: 1,
            children: []
          },
          {
            id: 57,
            value: "5",
            label: "其他",
            createTime: "2019-03-15 09:57:22",
            updateTime: "2019-03-15 09:57:22",
            sort: 1,
            children: []
          }
        ],
        crms_client_relation: [
          {
            id: 77,
            value: "0",
            label: "核心客户",
            createTime: "2019-03-20 01:36:52",
            updateTime: "2019-03-20 01:36:52",
            sort: 1,
            children: []
          },
          {
            id: 78,
            value: "1",
            label: "重要客户",
            createTime: "2019-03-20 01:36:58",
            updateTime: "2019-03-20 01:36:58",
            sort: 1,
            children: []
          },
          {
            id: 79,
            value: "2",
            label: "一般客户",
            createTime: "2019-03-20 01:37:00",
            updateTime: "2019-03-20 01:37:00",
            sort: 1,
            children: []
          },
          {
            id: 80,
            value: "3",
            label: "潜在客户",
            createTime: "2019-03-20 01:37:02",
            updateTime: "2019-03-20 01:37:02",
            sort: 1,
            children: []
          },
          {
            id: 81,
            value: "4",
            label: "其他客户",
            createTime: "2019-03-20 01:37:07",
            updateTime: "2019-03-20 01:37:07",
            sort: 1,
            children: []
          }
        ],
        mlms_contract_level: [
          {
            id: 123,
            value: "1",
            label: "百万级项目",
            createTime: "2019-03-21 02:20:13",
            updateTime: "2019-03-21 02:20:13",
            sort: 1,
            children: []
          },
          {
            id: 124,
            value: "2",
            label: "五十万以上项目",
            createTime: "2019-03-21 02:20:27",
            updateTime: "2019-03-21 02:20:27",
            sort: 1,
            children: []
          },
          {
            id: 125,
            value: "3",
            label: "二十万及以上项目",
            createTime: "2019-03-21 02:20:47",
            updateTime: "2019-03-21 02:20:47",
            sort: 1,
            children: []
          },
          {
            id: 126,
            value: "4",
            label: "二十万以下项目",
            createTime: "2019-03-21 02:21:05",
            updateTime: "2019-03-21 02:21:05",
            sort: 1,
            children: []
          }
        ],
        hrms_foreign_language: [
          {
            id: 541,
            value: "1",
            label: "不要求",
            createTime: "2019-04-26 22:34:12",
            updateTime: "2019-04-26 22:34:12",
            sort: 1,
            children: []
          },
          {
            id: 542,
            value: "2",
            label: "英语四级",
            createTime: "2019-04-26 22:34:21",
            updateTime: "2019-04-26 22:34:21",
            sort: 1,
            children: []
          },
          {
            id: 543,
            value: "3",
            label: "英语六级",
            createTime: "2019-04-26 22:34:34",
            updateTime: "2019-04-26 22:34:34",
            sort: 1,
            children: []
          },
          {
            id: 544,
            value: "4",
            label: "英语六级以上",
            createTime: "2019-04-26 22:34:45",
            updateTime: "2019-04-26 22:34:45",
            sort: 1,
            children: []
          },
          {
            id: 545,
            value: "5",
            label: "日语",
            createTime: "2019-04-26 22:34:54",
            updateTime: "2019-04-26 22:34:54",
            sort: 1,
            children: []
          },
          {
            id: 546,
            value: "6",
            label: "德语",
            createTime: "2019-04-26 22:35:02",
            updateTime: "2019-04-26 22:35:02",
            sort: 1,
            children: []
          },
          {
            id: 547,
            value: "7",
            label: "法语",
            createTime: "2019-04-26 22:35:10",
            updateTime: "2019-04-26 22:35:10",
            sort: 1,
            children: []
          },
          {
            id: 548,
            value: "8",
            label: "俄语",
            createTime: "2019-04-26 22:35:20",
            updateTime: "2019-04-26 22:35:20",
            sort: 1,
            children: []
          },
          {
            id: 549,
            value: "9",
            label: "其他",
            createTime: "2019-04-26 22:35:32",
            updateTime: "2019-04-26 22:35:32",
            sort: 1,
            children: []
          }
        ],
        MODULE_SERVICE_TYPE: [
          {
            id: 1009,
            value: "1",
            label: "数据体系",
            createTime: "2019-08-22 11:24:57",
            updateTime: "2019-08-22 11:24:57",
            sort: 1,
            children: []
          },
          {
            id: 1010,
            value: "2",
            label: "业务优化",
            createTime: "2019-08-22 11:25:06",
            updateTime: "2019-08-22 11:25:06",
            sort: 1,
            children: []
          },
          {
            id: 1011,
            value: "3",
            label: "组织进化",
            createTime: "2019-08-22 11:25:18",
            updateTime: "2019-08-22 11:25:18",
            sort: 1,
            children: []
          },
          {
            id: 1012,
            value: "4",
            label: "通用服务",
            createTime: "2019-09-20 08:49:10",
            updateTime: "2019-09-20 08:49:10",
            sort: 1,
            children: []
          }
        ],
        hrms_highest_educational: [
          {
            id: 8,
            value: "1",
            label: "高中及以下",
            createTime: "2019-03-07 06:23:10",
            updateTime: "2019-03-07 06:23:10",
            sort: 1,
            children: []
          },
          {
            id: 9,
            value: "2",
            label: "大专",
            createTime: "2019-03-07 06:23:18",
            updateTime: "2019-03-07 06:23:18",
            sort: 1,
            children: []
          },
          {
            id: 10,
            value: "3",
            label: "本科",
            createTime: "2019-03-07 06:23:25",
            updateTime: "2019-03-07 06:23:25",
            sort: 1,
            children: []
          },
          {
            id: 11,
            value: "4",
            label: "硕士",
            createTime: "2019-03-07 06:23:32",
            updateTime: "2019-03-07 06:23:32",
            sort: 1,
            children: []
          },
          {
            id: 12,
            value: "5",
            label: "博士及以上",
            createTime: "2019-03-07 06:23:41",
            updateTime: "2019-03-07 06:23:41",
            sort: 1,
            children: []
          }
        ],
        edu_professional_level: [
          {
            id: 1323,
            value: "1",
            label: "初级",
            createTime: "2021-04-19 15:56:02",
            updateTime: "2021-04-19 15:56:02",
            sort: 1,
            children: []
          },
          {
            id: 1324,
            value: "2",
            label: "中级",
            createTime: "2021-04-19 15:56:07",
            updateTime: "2021-04-19 15:56:07",
            sort: 1,
            children: []
          },
          {
            id: 1325,
            value: "3",
            label: "高级",
            createTime: "2021-04-19 15:56:11",
            updateTime: "2021-04-19 15:56:11",
            sort: 1,
            children: []
          }
        ],
        prms_business_document: [
          {
            id: 356,
            value: "2",
            label: "电子文件",
            createTime: "2019-04-05 06:45:15",
            updateTime: "2019-04-05 06:45:15",
            sort: 1,
            children: []
          }
        ],
        org_log_event_types: [
          {
            id: 1297,
            value: "1",
            label: "信息管理",
            createTime: "2021-04-13 14:49:28",
            updateTime: "2021-04-13 14:49:28",
            sort: 1,
            children: []
          },
          {
            id: 1298,
            value: "2",
            label: "通知公告",
            createTime: "2021-04-13 14:49:33",
            updateTime: "2021-04-13 14:49:33",
            sort: 1,
            children: []
          },
          {
            id: 1299,
            value: "3",
            label: "成员管理",
            createTime: "2021-04-13 14:49:39",
            updateTime: "2021-04-13 14:49:39",
            sort: 1,
            children: []
          },
          {
            id: 1300,
            value: "4",
            label: "角色配置",
            createTime: "2021-04-13 14:49:46",
            updateTime: "2021-04-13 14:49:46",
            sort: 1,
            children: []
          },
          {
            id: 1301,
            value: "5",
            label: "组织设置",
            createTime: "2021-04-13 14:49:52",
            updateTime: "2021-04-13 14:49:52",
            sort: 1,
            children: []
          }
        ],
        job_status: [
          {
            id: 729,
            value: "1",
            label: "未发布",
            createTime: "2019-07-09 14:44:09",
            updateTime: "2019-07-09 14:44:09",
            sort: 1,
            children: []
          },
          {
            id: 730,
            value: "2",
            label: "运行中",
            createTime: "2019-07-09 14:44:09",
            updateTime: "2019-07-09 14:44:09",
            sort: 1,
            children: []
          },
          {
            id: 731,
            value: "3",
            label: "暂停",
            createTime: "2019-07-09 14:44:09",
            updateTime: "2019-07-09 14:44:09",
            sort: 1,
            children: []
          }
        ],
        release_date: [
          {
            id: 1238,
            value: "1",
            label: "每年1月1日",
            createTime: "2021-03-10 16:54:45",
            updateTime: "2021-03-10 16:54:45",
            sort: 1,
            children: []
          },
          {
            id: 1239,
            value: "2",
            label: "每年员工入职日",
            createTime: "2021-03-10 16:54:53",
            updateTime: "2021-03-10 16:54:53",
            sort: 1,
            children: []
          }
        ],
        hrms_assessment_admin_stage: [
          {
            id: 1384,
            value: "1",
            label: "员工自评",
            createTime: "2021-05-11 09:23:35",
            updateTime: "2021-05-11 09:23:35",
            sort: 1,
            children: []
          },
          {
            id: 1385,
            value: "2",
            label: "上级评价",
            createTime: "2021-05-11 09:23:42",
            updateTime: "2021-05-11 09:23:42",
            sort: 1,
            children: []
          },
          {
            id: 1386,
            value: "3",
            label: "绩效校准",
            createTime: "2021-05-11 09:23:51",
            updateTime: "2021-05-11 09:23:51",
            sort: 1,
            children: []
          },
          {
            id: 1387,
            value: "4",
            label: "结束",
            createTime: "2021-05-11 09:23:58",
            updateTime: "2021-05-11 09:23:58",
            sort: 1,
            children: []
          },
          {
            id: 1388,
            value: "5",
            label: "到期终止",
            createTime: "2021-05-11 09:24:06",
            updateTime: "2021-05-11 09:24:06",
            sort: 1,
            children: []
          }
        ],
        DECLARE_STATUS: [
          {
            id: 819,
            value: "1",
            label: "即将开始",
            createTime: "2019-07-05 15:55:25",
            updateTime: "2019-07-05 15:55:25",
            sort: 1,
            children: []
          },
          {
            id: 820,
            value: "2",
            label: "申报中",
            createTime: "2019-07-05 15:55:25",
            updateTime: "2019-07-05 15:55:25",
            sort: 2,
            children: []
          },
          {
            id: 821,
            value: "3",
            label: "已截止",
            createTime: "2019-07-05 15:55:25",
            updateTime: "2019-07-05 15:55:25",
            sort: 3,
            children: []
          }
        ],
        hrms_dimension_type: [
          {
            id: 1368,
            value: "1",
            label: "定量指标",
            createTime: "2021-04-29 16:59:31",
            updateTime: "2021-04-29 16:59:31",
            sort: 1,
            children: []
          },
          {
            id: 1369,
            value: "2",
            label: "总结式",
            createTime: "2021-04-29 16:59:40",
            updateTime: "2021-04-29 16:59:40",
            sort: 1,
            children: []
          }
        ],
        atms_task_priority: [
          {
            id: 710,
            value: "1",
            label: "普通",
            createTime: "2019-07-03 09:18:47",
            updateTime: "2019-07-03 09:18:47",
            sort: 1,
            children: []
          },
          {
            id: 711,
            value: "2",
            label: "紧急",
            createTime: "2019-07-03 09:18:52",
            updateTime: "2019-07-03 09:18:52",
            sort: 1,
            children: []
          },
          {
            id: 712,
            value: "3",
            label: "非常紧急",
            createTime: "2019-07-03 09:18:58",
            updateTime: "2019-07-03 09:18:58",
            sort: 1,
            children: []
          }
        ],
        course_level: [
          {
            id: 1227,
            value: "1",
            label: "初级",
            createTime: "2021-03-05 09:08:26",
            updateTime: "2021-03-05 09:08:26",
            sort: 1,
            children: []
          },
          {
            id: 1228,
            value: "2",
            label: "中级",
            createTime: "2021-03-05 09:08:40",
            updateTime: "2021-03-05 09:08:40",
            sort: 2,
            children: []
          },
          {
            id: 1229,
            value: "3",
            label: "高级",
            createTime: "2021-03-05 09:08:32",
            updateTime: "2021-03-05 09:08:32",
            sort: 3,
            children: []
          }
        ],
        edu_teaching_type: [
          {
            id: 1343,
            value: "1",
            label: "公共课",
            createTime: "2021-04-19 16:00:15",
            updateTime: "2021-04-19 16:00:15",
            sort: 1,
            children: []
          },
          {
            id: 1344,
            value: "2",
            label: "专业课",
            createTime: "2021-04-19 16:00:19",
            updateTime: "2021-04-19 16:00:19",
            sort: 1,
            children: []
          },
          {
            id: 1345,
            value: "3",
            label: "无任教",
            createTime: "2021-04-19 16:00:24",
            updateTime: "2021-04-19 16:00:24",
            sort: 1,
            children: []
          }
        ],
        edu_consult_type: [
          {
            id: 1302,
            value: "1",
            label: "教学设计",
            createTime: "2021-04-09 11:30:25",
            updateTime: "2021-04-09 11:30:25",
            sort: 1,
            children: []
          },
          {
            id: 1303,
            value: "2",
            label: "教学方法",
            createTime: "2021-04-09 11:30:30",
            updateTime: "2021-04-09 11:30:30",
            sort: 1,
            children: []
          },
          {
            id: 1304,
            value: "3",
            label: "教学模式",
            createTime: "2021-04-09 11:30:39",
            updateTime: "2021-04-09 11:30:39",
            sort: 1,
            children: []
          },
          {
            id: 1305,
            value: "4",
            label: "教学手段",
            createTime: "2021-04-09 11:30:44",
            updateTime: "2021-04-09 11:30:44",
            sort: 1,
            children: []
          },
          {
            id: 1306,
            value: "5",
            label: "教学设计",
            createTime: "2021-04-09 11:30:49",
            updateTime: "2021-04-09 11:30:49",
            sort: 1,
            children: []
          }
        ],
        fams_account_type: [
          {
            id: 144,
            value: "1",
            label: "集团总账户",
            createTime: "2019-03-24 03:09:09",
            updateTime: "2019-03-24 03:09:09",
            sort: 1,
            children: []
          },
          {
            id: 145,
            value: "2",
            label: "组织账户",
            createTime: "2019-03-24 03:09:18",
            updateTime: "2019-03-24 03:09:18",
            sort: 1,
            children: []
          },
          {
            id: 146,
            value: "3",
            label: "个人账户",
            createTime: "2019-03-24 03:09:26",
            updateTime: "2019-03-24 03:09:26",
            sort: 1,
            children: []
          }
        ],
        hrms_expect_location: [],
        DECLARE_TARGET: [
          {
            id: 759,
            value: "3",
            label: "政府",
            createTime: "2019-07-05 15:45:47",
            updateTime: "2019-07-05 15:45:47",
            sort: 1,
            children: []
          },
          {
            id: 757,
            value: "1",
            label: "企业",
            createTime: "2019-07-05 15:45:47",
            updateTime: "2019-07-05 15:45:47",
            sort: 2,
            children: []
          },
          {
            id: 758,
            value: "2",
            label: "个人",
            createTime: "2019-07-05 15:45:47",
            updateTime: "2019-07-05 15:45:47",
            sort: 3,
            children: []
          },
          {
            id: 760,
            value: "4",
            label: "科研机构",
            createTime: "2019-07-05 15:45:47",
            updateTime: "2019-07-05 15:45:47",
            sort: 4,
            children: []
          },
          {
            id: 761,
            value: "5",
            label: "行业协会",
            createTime: "2019-07-05 15:45:47",
            updateTime: "2019-07-05 15:45:47",
            sort: 5,
            children: []
          },
          {
            id: 763,
            value: "8",
            label: "高校院所",
            createTime: "2019-07-05 15:45:47",
            updateTime: "2019-07-05 15:45:47",
            sort: 6,
            children: []
          },
          {
            id: 765,
            value: "9",
            label: "医疗机构",
            createTime: "2019-07-05 16:12:21",
            updateTime: "2019-07-05 16:12:21",
            sort: 7,
            children: []
          },
          {
            id: 762,
            value: "6",
            label: "园区",
            createTime: "2019-07-05 15:45:47",
            updateTime: "2019-07-05 15:45:47",
            sort: 8,
            children: []
          },
          {
            id: 764,
            value: "7",
            label: "其他",
            createTime: "2019-07-05 16:12:21",
            updateTime: "2019-07-05 16:12:21",
            sort: 9,
            children: []
          }
        ],
        balance_release_method: [
          {
            id: 1236,
            value: "0",
            label: "手动发放",
            createTime: "2021-03-10 16:03:47",
            updateTime: "2021-03-10 16:03:47",
            sort: 1,
            children: []
          },
          {
            id: 1237,
            value: "1",
            label: "每年自动发放一次",
            createTime: "2021-03-10 16:03:39",
            updateTime: "2021-03-10 16:03:39",
            sort: 1,
            children: []
          }
        ],
        cpms_task_repeat_type: [
          {
            id: 1403,
            value: "1",
            label: "无循环",
            createTime: "2021-06-03 14:30:43",
            updateTime: "2021-06-03 14:30:43",
            sort: 1,
            children: []
          },
          {
            id: 1404,
            value: "2",
            label: "每日重复",
            createTime: "2021-06-03 14:30:49",
            updateTime: "2021-06-03 14:30:49",
            sort: 1,
            children: []
          },
          {
            id: 1405,
            value: "3",
            label: "每周重复",
            createTime: "2021-06-03 14:30:58",
            updateTime: "2021-06-03 14:30:58",
            sort: 1,
            children: []
          },
          {
            id: 1406,
            value: "4",
            label: "每月重复",
            createTime: "2021-06-03 14:31:07",
            updateTime: "2021-06-03 14:31:07",
            sort: 1,
            children: []
          }
        ],
        hrms_politics_face: [
          {
            id: 24,
            value: "1",
            label: "群众",
            createTime: "2019-04-26 09:17:25",
            updateTime: "2019-04-26 09:17:25",
            sort: 1,
            children: []
          },
          {
            id: 25,
            value: "2",
            label: "共青团员",
            createTime: "2019-04-26 09:17:32",
            updateTime: "2019-04-26 09:17:32",
            sort: 2,
            children: []
          },
          {
            id: 409,
            value: "6",
            label: "中共预备党员",
            createTime: "2019-04-26 09:17:43",
            updateTime: "2019-04-26 09:17:43",
            sort: 3,
            children: []
          },
          {
            id: 26,
            value: "3",
            label: "中共党员",
            createTime: "2019-04-16 03:55:52",
            updateTime: "2019-04-16 03:55:52",
            sort: 4,
            children: []
          },
          {
            id: 27,
            value: "4",
            label: "民族党派",
            createTime: "2019-04-26 09:18:42",
            updateTime: "2019-04-26 09:18:42",
            sort: 5,
            children: []
          },
          {
            id: 28,
            value: "5",
            label: "无党派人士",
            createTime: "2019-04-26 09:18:49",
            updateTime: "2019-04-26 09:18:49",
            sort: 6,
            children: []
          }
        ],
        hrms_work_type: [
          {
            id: 13,
            value: "1",
            label: "全职",
            createTime: "2019-04-26 09:19:27",
            updateTime: "2019-04-26 09:19:27",
            sort: 1,
            children: []
          },
          {
            id: 15,
            value: "3",
            label: "实习",
            createTime: "2019-04-26 09:19:36",
            updateTime: "2019-04-26 09:19:36",
            sort: 3,
            children: []
          },
          {
            id: 16,
            value: "4",
            label: "全职/兼职",
            createTime: "2019-04-26 09:19:46",
            updateTime: "2019-04-26 09:19:46",
            sort: 4,
            children: []
          },
          {
            id: 14,
            value: "2",
            label: "兼职",
            createTime: "2019-04-18 03:58:01",
            updateTime: "2019-04-18 03:58:01",
            sort: 7,
            children: []
          }
        ],
        mlms_business_type: [
          {
            id: 115,
            value: "7",
            label: "其他",
            createTime: "2019-03-20 22:27:59",
            updateTime: "2019-03-20 22:27:59",
            sort: 1,
            children: []
          },
          {
            id: 113,
            value: "5",
            label: "会议培训",
            createTime: "2019-04-26 08:45:41",
            updateTime: "2019-04-26 08:45:41",
            sort: 3,
            children: []
          },
          {
            id: 112,
            value: "4",
            label: "外包",
            createTime: "2019-04-26 08:45:37",
            updateTime: "2019-04-26 08:45:37",
            sort: 4,
            children: []
          },
          {
            id: 109,
            value: "1",
            label: "咨询",
            createTime: "2019-04-26 08:45:30",
            updateTime: "2019-04-26 08:45:30",
            sort: 5,
            children: []
          },
          {
            id: 114,
            value: "6",
            label: "技术服务",
            createTime: "2019-04-26 08:45:24",
            updateTime: "2019-04-26 08:45:24",
            sort: 6,
            children: []
          },
          {
            id: 456,
            value: "8",
            label: "平台",
            createTime: "2019-04-26 08:45:17",
            updateTime: "2019-04-26 08:45:17",
            sort: 7,
            children: []
          },
          {
            id: 111,
            value: "3",
            label: "数据",
            createTime: "2019-04-26 08:45:01",
            updateTime: "2019-04-26 08:45:01",
            sort: 8,
            children: []
          },
          {
            id: 110,
            value: "2",
            label: "产品",
            createTime: "2019-04-26 08:44:50",
            updateTime: "2019-04-26 08:44:50",
            sort: 9,
            children: []
          }
        ],
        fams_expenditure_type: [
          {
            id: 195,
            value: "1",
            label: "办公房租",
            createTime: "2019-04-02 04:41:59",
            updateTime: "2019-04-02 04:41:59",
            sort: 1,
            children: [
              {
                id: 308,
                value: "1",
                label: "办公房租",
                createTime: "2019-04-02 05:30:00",
                updateTime: "2019-04-02 05:30:00",
                sort: 1
              },
              {
                id: 309,
                value: "2",
                label: "办公物业费",
                createTime: "2019-04-02 05:30:11",
                updateTime: "2019-04-02 05:30:11",
                sort: 1
              },
              {
                id: 310,
                value: "3",
                label: "办公水电费",
                createTime: "2019-04-02 05:30:27",
                updateTime: "2019-04-02 05:30:27",
                sort: 1
              },
              {
                id: 311,
                value: "4",
                label: "其他",
                createTime: "2019-04-02 05:30:41",
                updateTime: "2019-04-02 05:30:41",
                sort: 1
              }
            ]
          },
          {
            id: 196,
            value: "2",
            label: "人工成本",
            createTime: "2019-04-02 04:42:12",
            updateTime: "2019-04-02 04:42:12",
            sort: 1,
            children: [
              {
                id: 303,
                value: "5",
                label: "工资",
                createTime: "2019-05-10 10:19:30",
                updateTime: "2019-05-10 10:19:30",
                sort: 1
              },
              {
                id: 304,
                value: "6",
                label: "五险一金",
                createTime: "2019-05-10 10:19:35",
                updateTime: "2019-05-10 10:19:35",
                sort: 1
              },
              {
                id: 305,
                value: "7",
                label: "感恩基金",
                createTime: "2019-05-10 10:19:42",
                updateTime: "2019-05-10 10:19:42",
                sort: 1
              },
              {
                id: 306,
                value: "8",
                label: "个人所得税",
                createTime: "2019-05-10 10:19:48",
                updateTime: "2019-05-10 10:19:48",
                sort: 1
              },
              {
                id: 307,
                value: "9",
                label: "其他",
                createTime: "2019-05-10 10:19:55",
                updateTime: "2019-05-10 10:19:55",
                sort: 1
              }
            ]
          },
          {
            id: 197,
            value: "3",
            label: "员工福利",
            createTime: "2019-04-02 04:42:18",
            updateTime: "2019-04-02 04:42:18",
            sort: 1,
            children: [
              {
                id: 292,
                value: "10",
                label: "下午茶",
                createTime: "2019-05-10 10:20:03",
                updateTime: "2019-05-10 10:20:03",
                sort: 1
              },
              {
                id: 293,
                value: "11",
                label: "食堂伙食费",
                createTime: "2019-05-10 10:20:10",
                updateTime: "2019-05-10 10:20:10",
                sort: 1
              },
              {
                id: 294,
                value: "12",
                label: "餐费",
                createTime: "2019-05-10 10:20:17",
                updateTime: "2019-05-10 10:20:17",
                sort: 1
              },
              {
                id: 295,
                value: "13",
                label: "过节费",
                createTime: "2019-05-10 10:20:24",
                updateTime: "2019-05-10 10:20:24",
                sort: 1
              },
              {
                id: 296,
                value: "14",
                label: "意外险",
                createTime: "2019-05-10 10:20:31",
                updateTime: "2019-05-10 10:20:31",
                sort: 1
              },
              {
                id: 297,
                value: "15",
                label: "体检费用",
                createTime: "2019-05-10 10:20:39",
                updateTime: "2019-05-10 10:20:39",
                sort: 1
              },
              {
                id: 298,
                value: "16",
                label: "活动经费",
                createTime: "2019-05-10 10:20:46",
                updateTime: "2019-05-10 10:20:46",
                sort: 1
              },
              {
                id: 299,
                value: "17",
                label: "礼品费",
                createTime: "2019-05-10 10:20:54",
                updateTime: "2019-05-10 10:20:54",
                sort: 1
              },
              {
                id: 300,
                value: "18",
                label: "宿舍房租及物业费",
                createTime: "2019-05-10 10:21:02",
                updateTime: "2019-05-10 10:21:02",
                sort: 1
              },
              {
                id: 301,
                value: "19",
                label: "宿舍水电费",
                createTime: "2019-05-10 10:21:09",
                updateTime: "2019-05-10 10:21:09",
                sort: 1
              },
              {
                id: 302,
                value: "20",
                label: "其他",
                createTime: "2019-05-10 10:21:21",
                updateTime: "2019-05-10 10:21:21",
                sort: 1
              }
            ]
          },
          {
            id: 198,
            value: "4",
            label: "办公费用",
            createTime: "2019-04-02 04:42:37",
            updateTime: "2019-04-02 04:42:37",
            sort: 1,
            children: [
              {
                id: 284,
                value: "21",
                label: "办公日用品",
                createTime: "2019-05-10 10:21:27",
                updateTime: "2019-05-10 10:21:27",
                sort: 1
              },
              {
                id: 285,
                value: "22",
                label: "办公家具",
                createTime: "2019-05-10 10:21:31",
                updateTime: "2019-05-10 10:21:31",
                sort: 1
              },
              {
                id: 286,
                value: "23",
                label: "装修费",
                createTime: "2019-05-10 10:21:39",
                updateTime: "2019-05-10 10:21:39",
                sort: 1
              },
              {
                id: 287,
                value: "24",
                label: "快递费",
                createTime: "2019-05-10 10:21:45",
                updateTime: "2019-05-10 10:21:45",
                sort: 1
              },
              {
                id: 288,
                value: "25",
                label: "办公水电费",
                createTime: "2019-05-10 10:21:51",
                updateTime: "2019-05-10 10:21:51",
                sort: 1
              },
              {
                id: 289,
                value: "26",
                label: "印刷打印费",
                createTime: "2019-05-10 10:22:04",
                updateTime: "2019-05-10 10:22:04",
                sort: 1
              },
              {
                id: 290,
                value: "27",
                label: "制作费",
                createTime: "2019-05-10 10:22:10",
                updateTime: "2019-05-10 10:22:10",
                sort: 1
              },
              {
                id: 291,
                value: "28",
                label: "其他",
                createTime: "2019-05-10 10:22:16",
                updateTime: "2019-05-10 10:22:16",
                sort: 1
              }
            ]
          },
          {
            id: 199,
            value: "5",
            label: "公司车辆费用",
            createTime: "2019-04-02 05:11:14",
            updateTime: "2019-04-02 05:11:14",
            sort: 1,
            children: [
              {
                id: 281,
                value: "29",
                label: "车险",
                createTime: "2019-05-10 10:22:25",
                updateTime: "2019-05-10 10:22:25",
                sort: 1
              },
              {
                id: 282,
                value: "30",
                label: "维修费",
                createTime: "2019-05-10 10:22:32",
                updateTime: "2019-05-10 10:22:32",
                sort: 1
              },
              {
                id: 283,
                value: "31",
                label: "其他",
                createTime: "2019-05-10 10:22:37",
                updateTime: "2019-05-10 10:22:37",
                sort: 1
              },
              {
                id: 704,
                value: "100",
                label: "汽车加油费",
                createTime: "2019-06-28 17:18:56",
                updateTime: "2019-06-28 17:18:56",
                sort: 1
              }
            ]
          },
          {
            id: 200,
            value: "6",
            label: "差旅费",
            createTime: "2019-04-02 05:11:31",
            updateTime: "2019-04-02 05:11:31",
            sort: 1,
            children: [
              {
                id: 276,
                value: "32",
                label: "住宿费",
                createTime: "2019-05-10 10:22:47",
                updateTime: "2019-05-10 10:22:47",
                sort: 1
              },
              {
                id: 277,
                value: "33",
                label: "交通费",
                createTime: "2019-05-10 10:22:54",
                updateTime: "2019-05-10 10:22:54",
                sort: 1
              },
              {
                id: 278,
                value: "34",
                label: "差旅补贴",
                createTime: "2019-05-10 10:23:01",
                updateTime: "2019-05-10 10:23:01",
                sort: 1
              },
              {
                id: 279,
                value: "35",
                label: "小额餐费",
                createTime: "2019-05-10 10:23:13",
                updateTime: "2019-05-10 10:23:13",
                sort: 1
              },
              {
                id: 280,
                value: "36",
                label: "其他",
                createTime: "2019-05-10 10:23:23",
                updateTime: "2019-05-10 10:23:23",
                sort: 1
              }
            ]
          },
          {
            id: 201,
            value: "7",
            label: "董事会经费",
            createTime: "2019-04-02 05:11:39",
            updateTime: "2019-04-02 05:11:39",
            sort: 1,
            children: [
              {
                id: 271,
                value: "37",
                label: "交通费",
                createTime: "2019-05-10 10:23:36",
                updateTime: "2019-05-10 10:23:36",
                sort: 1
              },
              {
                id: 272,
                value: "38",
                label: "住宿费",
                createTime: "2019-05-10 10:23:48",
                updateTime: "2019-05-10 10:23:48",
                sort: 1
              },
              {
                id: 273,
                value: "39",
                label: "餐费",
                createTime: "2019-05-10 10:23:55",
                updateTime: "2019-05-10 10:23:55",
                sort: 1
              },
              {
                id: 274,
                value: "40",
                label: "礼品费",
                createTime: "2019-05-10 10:24:01",
                updateTime: "2019-05-10 10:24:01",
                sort: 1
              },
              {
                id: 275,
                value: "41",
                label: "其他",
                createTime: "2019-05-10 10:24:06",
                updateTime: "2019-05-10 10:24:06",
                sort: 1
              }
            ]
          },
          {
            id: 202,
            value: "8",
            label: "业务招待费",
            createTime: "2019-04-02 05:11:47",
            updateTime: "2019-04-02 05:11:47",
            sort: 1,
            children: [
              {
                id: 267,
                value: "42",
                label: "餐费",
                createTime: "2019-05-10 10:24:11",
                updateTime: "2019-05-10 10:24:11",
                sort: 1
              },
              {
                id: 268,
                value: "43",
                label: "礼品费",
                createTime: "2019-05-10 10:24:16",
                updateTime: "2019-05-10 10:24:16",
                sort: 1
              },
              {
                id: 269,
                value: "44",
                label: "专家费",
                createTime: "2019-05-10 10:24:22",
                updateTime: "2019-05-10 10:24:22",
                sort: 1
              },
              {
                id: 270,
                value: "45",
                label: "其他",
                createTime: "2019-05-10 10:24:28",
                updateTime: "2019-05-10 10:24:28",
                sort: 1
              }
            ]
          },
          {
            id: 203,
            value: "9",
            label: "会议费",
            createTime: "2019-04-02 05:11:57",
            updateTime: "2019-04-02 05:11:57",
            sort: 1,
            children: [
              {
                id: 261,
                value: "46",
                label: "场地租金",
                createTime: "2019-05-10 10:24:39",
                updateTime: "2019-05-10 10:24:39",
                sort: 1
              },
              {
                id: 262,
                value: "47",
                label: "交通费",
                createTime: "2019-05-10 10:24:46",
                updateTime: "2019-05-10 10:24:46",
                sort: 1
              },
              {
                id: 263,
                value: "48",
                label: "专家费",
                createTime: "2019-05-10 10:24:55",
                updateTime: "2019-05-10 10:24:55",
                sort: 1
              },
              {
                id: 264,
                value: "49",
                label: "餐费",
                createTime: "2019-05-10 10:25:03",
                updateTime: "2019-05-10 10:25:03",
                sort: 1
              },
              {
                id: 265,
                value: "50",
                label: "礼品费",
                createTime: "2019-05-10 10:25:09",
                updateTime: "2019-05-10 10:25:09",
                sort: 1
              },
              {
                id: 266,
                value: "51",
                label: "其他",
                createTime: "2019-05-10 10:25:15",
                updateTime: "2019-05-10 10:25:15",
                sort: 1
              }
            ]
          },
          {
            id: 204,
            value: "10",
            label: "职工教育经费",
            createTime: "2019-04-02 05:12:07",
            updateTime: "2019-04-02 05:12:07",
            sort: 1,
            children: [
              {
                id: 258,
                value: "52",
                label: "培训费",
                createTime: "2019-05-10 10:25:24",
                updateTime: "2019-05-10 10:25:24",
                sort: 1
              },
              {
                id: 259,
                value: "53",
                label: "图书报刊",
                createTime: "2019-05-10 10:25:30",
                updateTime: "2019-05-10 10:25:30",
                sort: 1
              },
              {
                id: 260,
                value: "54",
                label: "其他",
                createTime: "2019-05-10 10:25:44",
                updateTime: "2019-05-10 10:25:44",
                sort: 1
              }
            ]
          },
          {
            id: 205,
            value: "11",
            label: "咨询服务费",
            createTime: "2019-04-02 05:13:26",
            updateTime: "2019-04-02 05:13:26",
            sort: 1,
            children: [
              {
                id: 253,
                value: "55",
                label: "法律咨询",
                createTime: "2019-05-10 10:25:52",
                updateTime: "2019-05-10 10:25:52",
                sort: 1
              },
              {
                id: 254,
                value: "56",
                label: "人力咨询",
                createTime: "2019-05-10 10:25:59",
                updateTime: "2019-05-10 10:25:59",
                sort: 1
              },
              {
                id: 255,
                value: "57",
                label: "项目咨询",
                createTime: "2019-05-10 10:26:06",
                updateTime: "2019-05-10 10:26:06",
                sort: 1
              },
              {
                id: 256,
                value: "58",
                label: "外包服务费",
                createTime: "2019-05-10 10:26:13",
                updateTime: "2019-05-10 10:26:13",
                sort: 1
              },
              {
                id: 257,
                value: "59",
                label: "其他",
                createTime: "2019-05-10 10:26:19",
                updateTime: "2019-05-10 10:26:19",
                sort: 1
              }
            ]
          },
          {
            id: 206,
            value: "12",
            label: "固定资产",
            createTime: "2019-04-02 05:13:35",
            updateTime: "2019-04-02 05:13:35",
            sort: 1,
            children: [
              {
                id: 250,
                value: "60",
                label: "固定资产原值",
                createTime: "2019-05-10 10:26:30",
                updateTime: "2019-05-10 10:26:30",
                sort: 1
              },
              {
                id: 251,
                value: "61",
                label: "固定资产折旧",
                createTime: "2019-05-10 10:26:37",
                updateTime: "2019-05-10 10:26:37",
                sort: 1
              },
              {
                id: 252,
                value: "62",
                label: "其他",
                createTime: "2019-05-10 10:26:44",
                updateTime: "2019-05-10 10:26:44",
                sort: 1
              }
            ]
          },
          {
            id: 207,
            value: "13",
            label: "项目费用",
            createTime: "2019-04-02 05:13:43",
            updateTime: "2019-04-02 05:13:43",
            sort: 1,
            children: [
              {
                id: 244,
                value: "63",
                label: "中标服务费",
                createTime: "2019-05-10 10:26:56",
                updateTime: "2019-05-10 10:26:56",
                sort: 1
              },
              {
                id: 245,
                value: "64",
                label: "外包费用",
                createTime: "2019-05-10 10:27:08",
                updateTime: "2019-05-10 10:27:08",
                sort: 1
              },
              {
                id: 246,
                value: "65",
                label: "项目评审专家费",
                createTime: "2019-05-10 10:27:14",
                updateTime: "2019-05-10 10:27:14",
                sort: 1
              },
              {
                id: 247,
                value: "66",
                label: "佣金",
                createTime: "2019-05-10 10:27:21",
                updateTime: "2019-05-10 10:27:21",
                sort: 1
              },
              {
                id: 248,
                value: "67",
                label: "税费",
                createTime: "2019-05-10 10:27:27",
                updateTime: "2019-05-10 10:27:27",
                sort: 1
              },
              {
                id: 249,
                value: "68",
                label: "其他",
                createTime: "2019-05-10 10:27:33",
                updateTime: "2019-05-10 10:27:33",
                sort: 1
              }
            ]
          },
          {
            id: 208,
            value: "14",
            label: "分红",
            createTime: "2019-04-02 05:13:52",
            updateTime: "2019-04-02 05:13:52",
            sort: 1,
            children: [
              {
                id: 241,
                value: "69",
                label: "股东分红",
                createTime: "2019-05-10 10:27:40",
                updateTime: "2019-05-10 10:27:40",
                sort: 1
              },
              {
                id: 242,
                value: "70",
                label: "盈利分红",
                createTime: "2019-05-10 10:27:47",
                updateTime: "2019-05-10 10:27:47",
                sort: 1
              },
              {
                id: 243,
                value: "71",
                label: "其他",
                createTime: "2019-05-10 10:27:54",
                updateTime: "2019-05-10 10:27:54",
                sort: 1
              }
            ]
          },
          {
            id: 209,
            value: "15",
            label: "税费",
            createTime: "2019-04-02 05:13:58",
            updateTime: "2019-04-02 05:13:58",
            sort: 1,
            children: [
              {
                id: 235,
                value: "72",
                label: "增值税",
                createTime: "2019-05-10 10:28:01",
                updateTime: "2019-05-10 10:28:01",
                sort: 1
              },
              {
                id: 236,
                value: "73",
                label: "附加税费",
                createTime: "2019-05-10 10:28:09",
                updateTime: "2019-05-10 10:28:09",
                sort: 1
              },
              {
                id: 237,
                value: "74",
                label: "企业所得税",
                createTime: "2019-05-10 10:28:15",
                updateTime: "2019-05-10 10:28:15",
                sort: 1
              },
              {
                id: 238,
                value: "75",
                label: "印花税",
                createTime: "2019-05-10 10:28:23",
                updateTime: "2019-05-10 10:28:23",
                sort: 1
              },
              {
                id: 239,
                value: "76",
                label: "退税",
                createTime: "2019-05-10 10:28:31",
                updateTime: "2019-05-10 10:28:31",
                sort: 1
              },
              {
                id: 240,
                value: "77",
                label: "其他",
                createTime: "2019-05-10 10:28:38",
                updateTime: "2019-05-10 10:28:38",
                sort: 1
              }
            ]
          },
          {
            id: 210,
            value: "16",
            label: "财务费用",
            createTime: "2019-04-02 05:14:05",
            updateTime: "2019-04-02 05:14:05",
            sort: 1,
            children: [
              {
                id: 232,
                value: "78",
                label: "银行手续费",
                createTime: "2019-05-10 10:28:48",
                updateTime: "2019-05-10 10:28:48",
                sort: 1
              },
              {
                id: 233,
                value: "79",
                label: "借款利息",
                createTime: "2019-05-10 10:29:02",
                updateTime: "2019-05-10 10:29:02",
                sort: 1
              },
              {
                id: 234,
                value: "80",
                label: "其他",
                createTime: "2019-05-10 10:29:11",
                updateTime: "2019-05-10 10:29:11",
                sort: 1
              }
            ]
          },
          {
            id: 211,
            value: "17",
            label: "其他应收款",
            createTime: "2019-04-02 05:14:22",
            updateTime: "2019-04-02 05:14:22",
            sort: 1,
            children: [
              {
                id: 228,
                value: "81",
                label: "房租押金",
                createTime: "2019-05-10 10:29:21",
                updateTime: "2019-05-10 10:29:21",
                sort: 1
              },
              {
                id: 229,
                value: "82",
                label: "投标保证金",
                createTime: "2019-05-10 10:29:28",
                updateTime: "2019-05-10 10:29:28",
                sort: 1
              },
              {
                id: 230,
                value: "83",
                label: "履约保证金",
                createTime: "2019-05-10 10:29:37",
                updateTime: "2019-05-10 10:29:37",
                sort: 1
              },
              {
                id: 231,
                value: "84",
                label: "其他",
                createTime: "2019-05-10 10:29:45",
                updateTime: "2019-05-10 10:29:45",
                sort: 1
              },
              {
                id: 685,
                value: "95",
                label: "暂借款",
                createTime: "2019-06-20 09:52:16",
                updateTime: "2019-06-20 09:52:16",
                sort: 1
              }
            ]
          },
          {
            id: 212,
            value: "18",
            label: "其他费用",
            createTime: "2019-04-02 05:14:34",
            updateTime: "2019-04-02 05:14:34",
            sort: 1,
            children: [
              {
                id: 225,
                value: "85",
                label: "罚款",
                createTime: "2019-05-10 10:29:55",
                updateTime: "2019-05-10 10:29:55",
                sort: 1
              },
              {
                id: 226,
                value: "86",
                label: "捐赠",
                createTime: "2019-05-10 10:30:04",
                updateTime: "2019-05-10 10:30:04",
                sort: 1
              },
              {
                id: 227,
                value: "87",
                label: "其他",
                createTime: "2019-05-10 10:30:12",
                updateTime: "2019-05-10 10:30:12",
                sort: 1
              }
            ]
          },
          {
            id: 213,
            value: "19",
            label: "项目管理费",
            createTime: "2019-04-02 05:14:43",
            updateTime: "2019-04-02 05:14:43",
            sort: 1,
            children: [
              {
                id: 224,
                value: "88",
                label: "项目管理费",
                createTime: "2019-05-10 10:30:21",
                updateTime: "2019-05-10 10:30:21",
                sort: 1
              }
            ]
          },
          {
            id: 214,
            value: "20",
            label: "开票费",
            createTime: "2019-04-02 05:14:49",
            updateTime: "2019-04-02 05:14:49",
            sort: 1,
            children: [
              {
                id: 223,
                value: "89",
                label: "开票费",
                createTime: "2019-05-10 10:30:36",
                updateTime: "2019-05-10 10:30:36",
                sort: 1
              }
            ]
          },
          {
            id: 215,
            value: "21",
            label: "互助基金",
            createTime: "2019-04-02 05:14:57",
            updateTime: "2019-04-02 05:14:57",
            sort: 1,
            children: [
              {
                id: 222,
                value: "90",
                label: "互助基金",
                createTime: "2019-05-10 10:30:49",
                updateTime: "2019-05-10 10:30:49",
                sort: 1
              }
            ]
          },
          {
            id: 216,
            value: "22",
            label: "退股",
            createTime: "2019-04-02 05:15:08",
            updateTime: "2019-04-02 05:15:08",
            sort: 1,
            children: [
              {
                id: 221,
                value: "91",
                label: "退股",
                createTime: "2019-05-10 10:30:57",
                updateTime: "2019-05-10 10:30:57",
                sort: 1
              }
            ]
          },
          {
            id: 217,
            value: "23",
            label: "组织借款",
            createTime: "2019-04-02 05:15:20",
            updateTime: "2019-04-02 05:15:20",
            sort: 1,
            children: [
              {
                id: 220,
                value: "92",
                label: "组织借款",
                createTime: "2019-05-10 10:31:07",
                updateTime: "2019-05-10 10:31:07",
                sort: 1
              }
            ]
          },
          {
            id: 218,
            value: "24",
            label: "集团往来结算",
            createTime: "2019-04-02 05:15:29",
            updateTime: "2019-04-02 05:15:29",
            sort: 1,
            children: [
              {
                id: 219,
                value: "93",
                label: "集团往来结算",
                createTime: "2019-05-10 10:31:16",
                updateTime: "2019-05-10 10:31:16",
                sort: 1
              }
            ]
          },
          {
            id: 369,
            value: "25",
            label: "员工提现",
            createTime: "2019-04-12 23:13:06",
            updateTime: "2019-04-12 23:13:06",
            sort: 1,
            children: [
              {
                id: 573,
                value: "94",
                label: "员工提现",
                createTime: "2019-05-10 10:31:48",
                updateTime: "2019-05-10 10:31:48",
                sort: 1
              }
            ]
          },
          {
            id: 686,
            value: "96",
            label: "银行取现",
            createTime: "2019-06-20 09:52:38",
            updateTime: "2019-06-20 09:52:38",
            sort: 1,
            children: [
              {
                id: 687,
                value: "97",
                label: "银行取现",
                createTime: "2019-06-20 09:54:38",
                updateTime: "2019-06-20 09:54:38",
                sort: 1
              }
            ]
          },
          {
            id: 692,
            value: "98",
            label: "市内交通费",
            createTime: "2019-06-20 13:36:49",
            updateTime: "2019-06-20 13:36:49",
            sort: 1,
            children: [
              {
                id: 693,
                value: "99",
                label: "市内交通费",
                createTime: "2019-06-20 13:37:07",
                updateTime: "2019-06-20 13:37:07",
                sort: 1
              }
            ]
          },
          {
            id: 976,
            value: "101",
            label: "非成本费用",
            createTime: "2019-07-19 16:01:27",
            updateTime: "2019-07-19 16:01:27",
            sort: 1,
            children: [
              {
                id: 977,
                value: "102",
                label: "非成本费用",
                createTime: "2019-07-19 16:01:34",
                updateTime: "2019-07-19 16:01:34",
                sort: 1
              }
            ]
          }
        ],
        ORGANIZATION_CLASSIFICATION: [
          {
            id: 899,
            value: "1",
            label: "人民政府",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 1,
            children: []
          },
          {
            id: 900,
            value: "2",
            label: "科技部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 2,
            children: []
          },
          {
            id: 901,
            value: "3",
            label: "经信部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 3,
            children: []
          },
          {
            id: 902,
            value: "4",
            label: "发改部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 4,
            children: []
          },
          {
            id: 903,
            value: "5",
            label: "财政部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 5,
            children: []
          },
          {
            id: 904,
            value: "6",
            label: "工商部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 6,
            children: []
          },
          {
            id: 905,
            value: "7",
            label: "知识产权部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 7,
            children: []
          },
          {
            id: 906,
            value: "8",
            label: "商务部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 8,
            children: []
          },
          {
            id: 907,
            value: "9",
            label: "农业部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 9,
            children: []
          },
          {
            id: 908,
            value: "10",
            label: "司法部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 10,
            children: []
          },
          {
            id: 909,
            value: "11",
            label: "人社部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 11,
            children: []
          },
          {
            id: 910,
            value: "12",
            label: "文化部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 12,
            children: []
          },
          {
            id: 911,
            value: "13",
            label: "教育部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 13,
            children: []
          },
          {
            id: 912,
            value: "14",
            label: "民政部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 14,
            children: []
          },
          {
            id: 913,
            value: "15",
            label: "公安部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 15,
            children: []
          },
          {
            id: 914,
            value: "16",
            label: "安全部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 16,
            children: []
          },
          {
            id: 915,
            value: "17",
            label: "国土部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 17,
            children: []
          },
          {
            id: 916,
            value: "18",
            label: "住房和城乡建设部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 18,
            children: []
          },
          {
            id: 917,
            value: "19",
            label: "交通运输部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 19,
            children: []
          },
          {
            id: 918,
            value: "20",
            label: "水利部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 20,
            children: []
          },
          {
            id: 919,
            value: "21",
            label: "卫生部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 21,
            children: []
          },
          {
            id: 920,
            value: "22",
            label: "国防部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 22,
            children: []
          },
          {
            id: 921,
            value: "23",
            label: "人民银行",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 23,
            children: []
          },
          {
            id: 922,
            value: "24",
            label: "航天部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 24,
            children: []
          },
          {
            id: 923,
            value: "25",
            label: "海洋部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 25,
            children: []
          },
          {
            id: 924,
            value: "26",
            label: "海关部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 26,
            children: []
          },
          {
            id: 925,
            value: "27",
            label: "税务部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 27,
            children: []
          },
          {
            id: 926,
            value: "28",
            label: "市场监督管理部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 28,
            children: []
          },
          {
            id: 927,
            value: "29",
            label: "体育部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 29,
            children: []
          },
          {
            id: 928,
            value: "30",
            label: "统计部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 30,
            children: []
          },
          {
            id: 929,
            value: "31",
            label: "医疗保障部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 31,
            children: []
          },
          {
            id: 930,
            value: "32",
            label: "机关事务管理局",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 32,
            children: []
          },
          {
            id: 931,
            value: "33",
            label: "宗教事务局",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 33,
            children: []
          },
          {
            id: 932,
            value: "34",
            label: "粮食和物资储备局",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 34,
            children: []
          },
          {
            id: 933,
            value: "35",
            label: "能源局",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 35,
            children: []
          },
          {
            id: 934,
            value: "36",
            label: "烟草专卖局",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 36,
            children: []
          },
          {
            id: 935,
            value: "37",
            label: "林业部门",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 37,
            children: []
          },
          {
            id: 936,
            value: "38",
            label: "邮政局",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 38,
            children: []
          },
          {
            id: 937,
            value: "39",
            label: "中医药管理局",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 39,
            children: []
          },
          {
            id: 938,
            value: "40",
            label: "煤矿安全监察局",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 40,
            children: []
          },
          {
            id: 939,
            value: "41",
            label: "外汇管理局",
            createTime: "2019-07-05 16:05:33",
            updateTime: "2019-07-05 16:05:33",
            sort: 41,
            children: []
          }
        ],
        edu_title: [
          {
            id: 1339,
            value: "1",
            label: "助教",
            createTime: "2021-04-19 15:59:05",
            updateTime: "2021-04-19 15:59:05",
            sort: 1,
            children: []
          },
          {
            id: 1340,
            value: "2",
            label: "讲师",
            createTime: "2021-04-19 15:59:10",
            updateTime: "2021-04-19 15:59:10",
            sort: 1,
            children: []
          },
          {
            id: 1341,
            value: "3",
            label: "副教授",
            createTime: "2021-04-19 15:59:15",
            updateTime: "2021-04-19 15:59:15",
            sort: 1,
            children: []
          },
          {
            id: 1342,
            value: "4",
            label: "教授",
            createTime: "2021-04-19 15:59:19",
            updateTime: "2021-04-19 15:59:19",
            sort: 1,
            children: []
          }
        ],
        log_type: [
          {
            id: 1,
            value: "1",
            label: "正常",
            createTime: "2019-03-07 03:44:29",
            updateTime: "2019-03-07 03:44:29",
            sort: 1,
            children: []
          }
        ],
        edu_job_category: [
          {
            id: 1321,
            value: "1",
            label: "专任教师",
            createTime: "2021-04-19 15:55:05",
            updateTime: "2021-04-19 15:55:05",
            sort: 1,
            children: []
          },
          {
            id: 1322,
            value: "2",
            label: "教辅人员",
            createTime: "2021-04-19 15:55:11",
            updateTime: "2021-04-19 15:55:11",
            sort: 1,
            children: []
          }
        ],
        hrms_applic_type: [
          {
            id: 58,
            value: "1",
            label: "请假",
            createTime: "2021-05-08 10:15:06",
            updateTime: "2021-05-08 10:15:06",
            sort: 1,
            children: []
          },
          {
            id: 59,
            value: "2",
            label: "出差",
            createTime: "2021-05-08 10:15:07",
            updateTime: "2021-05-08 10:15:07",
            sort: 2,
            children: []
          },
          {
            id: 61,
            value: "4",
            label: "转正",
            createTime: "2021-05-08 10:15:10",
            updateTime: "2021-05-08 10:15:10",
            sort: 3,
            children: []
          },
          {
            id: 60,
            value: "3",
            label: "加班",
            createTime: "2021-05-08 10:15:08",
            updateTime: "2021-05-08 10:15:08",
            sort: 4,
            children: []
          },
          {
            id: 62,
            value: "5",
            label: "离职",
            createTime: "2021-05-08 10:15:11",
            updateTime: "2021-05-08 10:15:11",
            sort: 6,
            children: []
          }
        ],
        DECLARE_SUPPORT: [
          {
            id: 774,
            value: "1",
            label: "资金扶持",
            createTime: "2019-07-05 15:51:02",
            updateTime: "2019-07-05 15:51:02",
            sort: 1,
            children: []
          },
          {
            id: 775,
            value: "2",
            label: "降低成本",
            createTime: "2019-07-05 15:51:02",
            updateTime: "2019-07-05 15:51:02",
            sort: 2,
            children: []
          },
          {
            id: 776,
            value: "3",
            label: "评选认定",
            createTime: "2019-07-05 15:51:02",
            updateTime: "2019-07-05 15:51:02",
            sort: 3,
            children: []
          },
          {
            id: 777,
            value: "4",
            label: "简化审批",
            createTime: "2019-07-05 15:51:02",
            updateTime: "2019-07-05 15:51:02",
            sort: 4,
            children: []
          },
          {
            id: 778,
            value: "5",
            label: "其他",
            createTime: "2019-07-05 15:51:02",
            updateTime: "2019-07-05 15:51:02",
            sort: 5,
            children: []
          }
        ],
        edu_college: [
          {
            id: 1348,
            value: "1",
            label: "哲学院",
            createTime: "2021-04-20 16:32:00",
            updateTime: "2021-04-20 16:32:00",
            sort: 1,
            children: []
          },
          {
            id: 1349,
            value: "2",
            label: "法学院",
            createTime: "2021-04-20 16:32:06",
            updateTime: "2021-04-20 16:32:06",
            sort: 1,
            children: []
          },
          {
            id: 1350,
            value: "3",
            label: "社会学院",
            createTime: "2021-04-20 16:32:11",
            updateTime: "2021-04-20 16:32:11",
            sort: 1,
            children: []
          },
          {
            id: 1351,
            value: "4",
            label: "外国语学院",
            createTime: "2021-04-20 16:32:17",
            updateTime: "2021-04-20 16:32:17",
            sort: 1,
            children: []
          },
          {
            id: 1352,
            value: "5",
            label: "国际教育学院",
            createTime: "2021-04-20 16:32:23",
            updateTime: "2021-04-20 16:32:23",
            sort: 1,
            children: []
          },
          {
            id: 1353,
            value: "6",
            label: "继续教育学院",
            createTime: "2021-04-20 16:32:30",
            updateTime: "2021-04-20 16:32:30",
            sort: 1,
            children: []
          },
          {
            id: 1354,
            value: "7",
            label: "经济学院",
            createTime: "2021-04-20 16:32:35",
            updateTime: "2021-04-20 16:32:35",
            sort: 1,
            children: []
          },
          {
            id: 1355,
            value: "8",
            label: "商学院",
            createTime: "2021-04-20 16:32:41",
            updateTime: "2021-04-20 16:32:41",
            sort: 1,
            children: []
          },
          {
            id: 1356,
            value: "9",
            label: "政府管理学院",
            createTime: "2021-04-20 16:32:47",
            updateTime: "2021-04-20 16:32:47",
            sort: 1,
            children: []
          },
          {
            id: 1357,
            value: "10",
            label: "国际关系学院",
            createTime: "2021-04-20 16:32:55",
            updateTime: "2021-04-20 16:32:55",
            sort: 1,
            children: []
          },
          {
            id: 1358,
            value: "11",
            label: "马克思主义学院",
            createTime: "2021-04-20 16:32:59",
            updateTime: "2021-04-20 16:32:59",
            sort: 1,
            children: []
          },
          {
            id: 1359,
            value: "12",
            label: "文学院",
            createTime: "2021-04-20 16:33:04",
            updateTime: "2021-04-20 16:33:04",
            sort: 1,
            children: []
          },
          {
            id: 1360,
            value: "13",
            label: "历史学院",
            createTime: "2021-04-20 16:33:09",
            updateTime: "2021-04-20 16:33:09",
            sort: 1,
            children: []
          },
          {
            id: 1361,
            value: "14",
            label: "新闻传播学院",
            createTime: "2021-04-20 16:33:17",
            updateTime: "2021-04-20 16:33:17",
            sort: 1,
            children: []
          },
          {
            id: 1362,
            value: "15",
            label: "体育教研部",
            createTime: "2021-04-20 16:33:24",
            updateTime: "2021-04-20 16:33:24",
            sort: 1,
            children: []
          },
          {
            id: 1363,
            value: "16",
            label: "计算机教研部",
            createTime: "2021-04-20 16:33:29",
            updateTime: "2021-04-20 16:33:29",
            sort: 1,
            children: []
          }
        ],
        ims_notify_type: [
          {
            id: 139,
            value: "1",
            label: "日常公告",
            createTime: "2019-04-26 09:20:08",
            updateTime: "2019-04-26 09:20:08",
            sort: 1,
            children: []
          },
          {
            id: 140,
            value: "2",
            label: "公司制度",
            createTime: "2019-04-26 09:20:11",
            updateTime: "2019-04-26 09:20:11",
            sort: 2,
            children: []
          },
          {
            id: 141,
            value: "3",
            label: "培训通知",
            createTime: "2019-04-26 09:20:20",
            updateTime: "2019-04-26 09:20:20",
            sort: 3,
            children: []
          },
          {
            id: 142,
            value: "4",
            label: "人事调动",
            createTime: "2019-04-26 09:20:24",
            updateTime: "2019-04-26 09:20:24",
            sort: 4,
            children: []
          },
          {
            id: 143,
            value: "5",
            label: "其他通知",
            createTime: "2019-04-26 09:20:28",
            updateTime: "2019-04-26 09:20:28",
            sort: 5,
            children: []
          }
        ],
        billing_type: [
          {
            id: 1260,
            value: "1",
            label: "增值税专用发票",
            createTime: "2021-03-25 15:04:31",
            updateTime: "2021-03-25 15:04:31",
            sort: 1,
            children: []
          },
          {
            id: 1261,
            value: "2",
            label: "增值税普通发票",
            createTime: "2021-03-25 15:04:39",
            updateTime: "2021-03-25 15:04:39",
            sort: 1,
            children: []
          }
        ],
        mlms_material_type: [
          {
            id: 385,
            value: "1",
            label: "规范/要求/领导讲话",
            createTime: "2019-04-16 03:49:56",
            updateTime: "2019-04-16 03:49:56",
            sort: 1,
            children: []
          },
          {
            id: 386,
            value: "2",
            label: "通知/公告",
            createTime: "2019-04-16 03:50:04",
            updateTime: "2019-04-16 03:50:04",
            sort: 1,
            children: []
          },
          {
            id: 387,
            value: "3",
            label: "专家观点",
            createTime: "2019-04-16 03:50:10",
            updateTime: "2019-04-16 03:50:10",
            sort: 1,
            children: []
          },
          {
            id: 388,
            value: "4",
            label: "方案",
            createTime: "2019-04-16 03:50:17",
            updateTime: "2019-04-16 03:50:17",
            sort: 1,
            children: []
          },
          {
            id: 389,
            value: "5",
            label: "报告/评估报告",
            createTime: "2019-04-16 03:50:25",
            updateTime: "2019-04-16 03:50:25",
            sort: 1,
            children: []
          },
          {
            id: 390,
            value: "6",
            label: "清单",
            createTime: "2019-04-16 03:50:35",
            updateTime: "2019-04-16 03:50:35",
            sort: 1,
            children: []
          },
          {
            id: 391,
            value: "7",
            label: "说明书/手册",
            createTime: "2019-04-16 03:50:46",
            updateTime: "2019-04-16 03:50:46",
            sort: 1,
            children: []
          },
          {
            id: 392,
            value: "8",
            label: "协议/合同",
            createTime: "2019-04-16 03:50:57",
            updateTime: "2019-04-16 03:50:57",
            sort: 1,
            children: []
          },
          {
            id: 393,
            value: "9",
            label: "行业资讯",
            createTime: "2019-04-16 03:51:06",
            updateTime: "2019-04-16 03:51:06",
            sort: 1,
            children: []
          },
          {
            id: 394,
            value: "10",
            label: "领域前沿",
            createTime: "2019-04-16 03:51:14",
            updateTime: "2019-04-16 03:51:14",
            sort: 1,
            children: []
          },
          {
            id: 395,
            value: "11",
            label: "流程计划",
            createTime: "2019-04-16 03:51:21",
            updateTime: "2019-04-16 03:51:21",
            sort: 1,
            children: []
          },
          {
            id: 396,
            value: "12",
            label: "过程材料",
            createTime: "2019-04-16 03:51:29",
            updateTime: "2019-04-16 03:51:29",
            sort: 1,
            children: []
          },
          {
            id: 397,
            value: "13",
            label: "交付文档",
            createTime: "2019-04-16 03:51:36",
            updateTime: "2019-04-16 03:51:36",
            sort: 1,
            children: []
          },
          {
            id: 398,
            value: "14",
            label: "学习经验",
            createTime: "2019-04-16 03:51:42",
            updateTime: "2019-04-16 03:51:42",
            sort: 1,
            children: []
          },
          {
            id: 399,
            value: "15",
            label: "技能工具",
            createTime: "2019-04-16 03:51:49",
            updateTime: "2019-04-16 03:51:49",
            sort: 1,
            children: []
          },
          {
            id: 400,
            value: "16",
            label: "宣传文档/物料",
            createTime: "2019-04-16 03:52:09",
            updateTime: "2019-04-16 03:52:09",
            sort: 1,
            children: []
          },
          {
            id: 401,
            value: "17",
            label: "图片/视频",
            createTime: "2019-04-16 03:52:54",
            updateTime: "2019-04-16 03:52:54",
            sort: 1,
            children: []
          },
          {
            id: 405,
            value: "21",
            label: "重大项目vip库",
            createTime: "2019-04-16 03:53:29",
            updateTime: "2019-04-16 03:53:29",
            sort: 1,
            children: []
          },
          {
            id: 406,
            value: "22",
            label: "模板库",
            createTime: "2019-04-16 03:53:40",
            updateTime: "2019-04-16 03:53:40",
            sort: 1,
            children: []
          },
          {
            id: 407,
            value: "23",
            label: "培训课件库",
            createTime: "2019-04-16 03:53:47",
            updateTime: "2019-04-16 03:53:47",
            sort: 1,
            children: []
          },
          {
            id: 408,
            value: "24",
            label: "标准规范库",
            createTime: "2019-04-16 03:53:54",
            updateTime: "2019-04-16 03:53:54",
            sort: 1,
            children: []
          },
          {
            id: 561,
            value: "25",
            label: "白皮书/书籍",
            createTime: "2019-05-05 09:49:20",
            updateTime: "2019-05-05 09:49:20",
            sort: 1,
            children: []
          },
          {
            id: 589,
            value: "26",
            label: "其他",
            createTime: "2019-05-20 15:50:46",
            updateTime: "2019-05-20 15:50:46",
            sort: 1,
            children: []
          }
        ],
        crms_client_opportunity: [
          {
            id: 87,
            value: "0",
            label: "咨询",
            createTime: "2019-03-19 21:37:41",
            updateTime: "2019-03-19 21:37:41",
            sort: 1,
            children: []
          },
          {
            id: 88,
            value: "1",
            label: "事项",
            createTime: "2019-03-19 21:37:44",
            updateTime: "2019-03-19 21:37:44",
            sort: 1,
            children: []
          },
          {
            id: 89,
            value: "2",
            label: "平台",
            createTime: "2019-03-19 21:37:49",
            updateTime: "2019-03-19 21:37:49",
            sort: 1,
            children: []
          },
          {
            id: 90,
            value: "3",
            label: "软件",
            createTime: "2019-03-19 21:37:54",
            updateTime: "2019-03-19 21:37:54",
            sort: 1,
            children: []
          },
          {
            id: 91,
            value: "4",
            label: "数据",
            createTime: "2019-03-19 21:37:58",
            updateTime: "2019-03-19 21:37:58",
            sort: 1,
            children: []
          }
        ],
        pgbd_standard_classification: [
          {
            id: 988,
            value: "1",
            label: "国家标准",
            createTime: "2019-08-06 14:43:51",
            updateTime: "2019-08-06 14:43:51",
            sort: 1,
            children: []
          },
          {
            id: 989,
            value: "2",
            label: "行业标准",
            createTime: "2019-08-06 14:44:00",
            updateTime: "2019-08-06 14:44:00",
            sort: 1,
            children: []
          },
          {
            id: 990,
            value: "3",
            label: "地方标准",
            createTime: "2019-08-06 14:44:13",
            updateTime: "2019-08-06 14:44:13",
            sort: 1,
            children: []
          }
        ],
        IS_NOTT: [
          {
            id: 737,
            value: "0",
            label: "正常",
            createTime: "2019-07-05 15:37:46",
            updateTime: "2019-07-05 15:37:46",
            sort: 0,
            children: []
          },
          {
            id: 738,
            value: "9",
            label: "异常",
            createTime: "2019-07-05 15:37:46",
            updateTime: "2019-07-05 15:37:46",
            sort: 0,
            children: []
          }
        ],
        DECLARE_FORMALITY: [
          {
            id: 769,
            value: "1",
            label: "奖补",
            createTime: "2019-07-05 15:49:21",
            updateTime: "2019-07-05 15:49:21",
            sort: 1,
            children: []
          },
          {
            id: 770,
            value: "2",
            label: "股权",
            createTime: "2019-07-05 15:49:21",
            updateTime: "2019-07-05 15:49:21",
            sort: 2,
            children: []
          },
          {
            id: 771,
            value: "3",
            label: "投资",
            createTime: "2019-07-05 15:49:21",
            updateTime: "2019-07-05 15:49:21",
            sort: 3,
            children: []
          },
          {
            id: 772,
            value: "4",
            label: "减免",
            createTime: "2019-07-05 15:49:21",
            updateTime: "2019-07-05 15:49:21",
            sort: 4,
            children: []
          },
          {
            id: 773,
            value: "5",
            label: "其他",
            createTime: "2019-07-05 15:49:21",
            updateTime: "2019-07-05 15:49:21",
            sort: 5,
            children: []
          }
        ],
        POLICY_SEND: [
          {
            id: 942,
            value: "1",
            label: "直接印发",
            createTime: "2019-07-05 16:07:38",
            updateTime: "2019-07-05 16:07:38",
            sort: 1,
            children: []
          },
          {
            id: 943,
            value: "2",
            label: "转发",
            createTime: "2019-07-05 16:07:38",
            updateTime: "2019-07-05 16:07:38",
            sort: 2,
            children: []
          }
        ],
        edu_train_type: [
          {
            id: 1307,
            value: "1",
            label: "新教师入职",
            createTime: "2021-04-14 14:43:00",
            updateTime: "2021-04-14 14:43:00",
            sort: 1,
            children: []
          },
          {
            id: 1308,
            value: "2",
            label: "教学能力培训",
            createTime: "2021-04-14 14:43:14",
            updateTime: "2021-04-14 14:43:14",
            sort: 1,
            children: []
          },
          {
            id: 1309,
            value: "3",
            label: "师德师风培训",
            createTime: "2021-04-14 14:43:22",
            updateTime: "2021-04-14 14:43:22",
            sort: 1,
            children: []
          },
          {
            id: 1310,
            value: "4",
            label: "专项教学培训",
            createTime: "2021-04-14 14:43:33",
            updateTime: "2021-04-14 14:43:33",
            sort: 1,
            children: []
          },
          {
            id: 1311,
            value: "5",
            label: "骨干教师培训",
            createTime: "2021-04-14 14:43:49",
            updateTime: "2021-04-14 14:43:49",
            sort: 1,
            children: []
          }
        ],
        DECLARE_SPECIAL: [
          {
            id: 822,
            value: "1",
            label: "环境治理专项资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 1,
            children: []
          },
          {
            id: 823,
            value: "2",
            label: "工业发展资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 2,
            children: []
          },
          {
            id: 824,
            value: "3",
            label: "科技创新资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 3,
            children: []
          },
          {
            id: 825,
            value: "4",
            label: "科技三项经费",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 4,
            children: []
          },
          {
            id: 826,
            value: "5",
            label: "专利专项资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 5,
            children: []
          },
          {
            id: 827,
            value: "6",
            label: "企业更新改造资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 6,
            children: []
          },
          {
            id: 828,
            value: "7",
            label: "外贸企业出口奖励补贴",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 7,
            children: []
          },
          {
            id: 829,
            value: "8",
            label: "重大项目前期工作经费",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 8,
            children: []
          },
          {
            id: 830,
            value: "9",
            label: "散装水泥专项资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 9,
            children: []
          },
          {
            id: 831,
            value: "10",
            label: "康庄工程建设资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 10,
            children: []
          },
          {
            id: 832,
            value: "11",
            label: "森林生态效益资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 11,
            children: []
          },
          {
            id: 833,
            value: "12",
            label: "新农村建设资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 12,
            children: []
          },
          {
            id: 834,
            value: "13",
            label: "农发资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 13,
            children: []
          },
          {
            id: 835,
            value: "14",
            label: "农技专项资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 14,
            children: []
          },
          {
            id: 836,
            value: "15",
            label: "国有土地出让金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 15,
            children: []
          },
          {
            id: 837,
            value: "16",
            label: "水利资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 16,
            children: []
          },
          {
            id: 838,
            value: "17",
            label: "改善教育教学条件专项资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 17,
            children: []
          },
          {
            id: 839,
            value: "18",
            label: "文化发展、文物保护专项资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 18,
            children: []
          },
          {
            id: 840,
            value: "19",
            label: "最低生活保障资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 19,
            children: []
          },
          {
            id: 841,
            value: "20",
            label: "再就业资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 20,
            children: []
          },
          {
            id: 842,
            value: "21",
            label: "新型农村合作医疗资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 21,
            children: []
          },
          {
            id: 843,
            value: "22",
            label: "社会医疗救助资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 22,
            children: []
          },
          {
            id: 844,
            value: "23",
            label: "优抚金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 23,
            children: []
          },
          {
            id: 845,
            value: "24",
            label: "城镇退役士兵就业安置金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 24,
            children: []
          },
          {
            id: 846,
            value: "25",
            label: "养路费专项资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 25,
            children: []
          },
          {
            id: 847,
            value: "26",
            label: "旅游发展资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 26,
            children: []
          },
          {
            id: 848,
            value: "27",
            label: "粮食补助专项资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 27,
            children: []
          },
          {
            id: 849,
            value: "28",
            label: "招商引资专项资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 28,
            children: []
          },
          {
            id: 850,
            value: "29",
            label: "人才开发专项资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 29,
            children: []
          },
          {
            id: 851,
            value: "30",
            label: "政法装备专项资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 30,
            children: []
          },
          {
            id: 852,
            value: "31",
            label: "其他专项资金",
            createTime: "2019-07-05 15:57:04",
            updateTime: "2019-07-05 15:57:04",
            sort: 31,
            children: []
          }
        ],
        exam_difficulty: [
          {
            id: 1208,
            value: "SIMPLE",
            label: "简单",
            createTime: "2021-03-04 09:02:23",
            updateTime: "2021-03-04 09:02:23",
            sort: 1,
            children: []
          },
          {
            id: 1209,
            value: "GENERAL",
            label: "较难",
            createTime: "2021-03-04 09:02:48",
            updateTime: "2021-03-04 09:02:48",
            sort: 2,
            children: []
          },
          {
            id: 1210,
            value: "DIFFICULT",
            label: "很难",
            createTime: "2021-03-04 09:03:06",
            updateTime: "2021-03-04 09:03:06",
            sort: 3,
            children: []
          }
        ],
        POLICY_THEME: [
          {
            id: 801,
            value: "l",
            label: "数字政府",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 1,
            children: []
          },
          {
            id: 806,
            value: "q",
            label: "营商环境",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 2,
            children: []
          },
          {
            id: 807,
            value: "r",
            label: "互联网+",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 3,
            children: []
          },
          {
            id: 802,
            value: "m",
            label: "智慧城市",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 4,
            children: []
          },
          {
            id: 804,
            value: "o",
            label: "数字经济",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 5,
            children: []
          },
          {
            id: 811,
            value: "v",
            label: "数据治理",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 6,
            children: []
          },
          {
            id: 803,
            value: "n",
            label: "电子政务",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 7,
            children: []
          },
          {
            id: 808,
            value: "s",
            label: "政务公开",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 8,
            children: []
          },
          {
            id: 809,
            value: "t",
            label: "一带一路",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 9,
            children: []
          },
          {
            id: 805,
            value: "p",
            label: "大数据",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 10,
            children: []
          },
          {
            id: 810,
            value: "u",
            label: "区块链",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 11,
            children: []
          },
          {
            id: 782,
            value: "2",
            label: "人才引进和能力培育",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 12,
            children: []
          },
          {
            id: 781,
            value: "1",
            label: "企业创办",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 13,
            children: []
          },
          {
            id: 783,
            value: "3",
            label: "投资融资",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 14,
            children: []
          },
          {
            id: 784,
            value: "4",
            label: "税收优惠",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 15,
            children: []
          },
          {
            id: 785,
            value: "5",
            label: "市场拓展",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 16,
            children: []
          },
          {
            id: 786,
            value: "6",
            label: "品牌建设",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 17,
            children: []
          },
          {
            id: 787,
            value: "7",
            label: "创新研发",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 18,
            children: []
          },
          {
            id: 788,
            value: "8",
            label: "科研课题",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 19,
            children: []
          },
          {
            id: 789,
            value: "9",
            label: "成果转化",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 20,
            children: []
          },
          {
            id: 790,
            value: "a",
            label: "知识产权",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 21,
            children: []
          },
          {
            id: 791,
            value: "b",
            label: "信息化建设",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 22,
            children: []
          },
          {
            id: 792,
            value: "c",
            label: "资质认定",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 23,
            children: []
          },
          {
            id: 793,
            value: "d",
            label: "产业发展",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 24,
            children: []
          },
          {
            id: 794,
            value: "e",
            label: "节能环保",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 25,
            children: []
          },
          {
            id: 795,
            value: "f",
            label: "转型升级",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 26,
            children: []
          },
          {
            id: 796,
            value: "g",
            label: "改制上市",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 27,
            children: []
          },
          {
            id: 797,
            value: "h",
            label: "并购重组",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 28,
            children: []
          },
          {
            id: 800,
            value: "k",
            label: "招商引资",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 29,
            children: []
          },
          {
            id: 798,
            value: "i",
            label: "平台基地建设",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 30,
            children: []
          },
          {
            id: 799,
            value: "j",
            label: "孵化器及基地建设",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 31,
            children: []
          },
          {
            id: 813,
            value: "x",
            label: "工程报建",
            createTime: "2019-07-05 16:14:00",
            updateTime: "2019-07-05 16:14:00",
            sort: 32,
            children: []
          },
          {
            id: 814,
            value: "y",
            label: "不动产登记",
            createTime: "2019-07-05 16:14:00",
            updateTime: "2019-07-05 16:14:00",
            sort: 33,
            children: []
          },
          {
            id: 815,
            value: "z",
            label: "电子商务",
            createTime: "2019-07-05 16:14:00",
            updateTime: "2019-07-05 16:14:00",
            sort: 34,
            children: []
          },
          {
            id: 816,
            value: "a1",
            label: "三农发展",
            createTime: "2019-07-05 16:14:00",
            updateTime: "2019-07-05 16:14:00",
            sort: 35,
            children: []
          },
          {
            id: 817,
            value: "a2",
            label: "医疗健康",
            createTime: "2019-07-05 16:14:00",
            updateTime: "2019-07-05 16:14:00",
            sort: 36,
            children: []
          },
          {
            id: 818,
            value: "a3",
            label: "学校教育",
            createTime: "2019-07-05 16:14:00",
            updateTime: "2019-07-05 16:14:00",
            sort: 37,
            children: []
          },
          {
            id: 812,
            value: "w",
            label: "其他",
            createTime: "2019-07-05 15:54:12",
            updateTime: "2019-07-05 15:54:12",
            sort: 38,
            children: []
          }
        ],
        course_ware_type: [
          {
            id: 1223,
            value: "1",
            label: "视频",
            createTime: "2021-03-05 09:07:17",
            updateTime: "2021-03-05 09:07:17",
            sort: 1,
            children: []
          },
          {
            id: 1224,
            value: "2",
            label: "音频",
            createTime: "2021-03-05 09:07:30",
            updateTime: "2021-03-05 09:07:30",
            sort: 2,
            children: []
          },
          {
            id: 1225,
            value: "3",
            label: "文档",
            createTime: "2021-03-05 09:07:37",
            updateTime: "2021-03-05 09:07:37",
            sort: 3,
            children: []
          },
          {
            id: 1226,
            value: "4",
            label: "其他",
            createTime: "2021-03-05 09:07:39",
            updateTime: "2021-03-05 09:07:39",
            sort: 4,
            children: []
          }
        ],
        cpms_propose_type: [
          {
            id: 719,
            value: "1",
            label: "功能优化",
            createTime: "2019-07-08 17:40:19",
            updateTime: "2019-07-08 17:40:19",
            sort: 1,
            children: []
          },
          {
            id: 720,
            value: "2",
            label: "页面优化",
            createTime: "2019-07-08 17:40:40",
            updateTime: "2019-07-08 17:40:40",
            sort: 1,
            children: []
          },
          {
            id: 721,
            value: "3",
            label: "新增功能",
            createTime: "2019-07-08 17:41:06",
            updateTime: "2019-07-08 17:41:06",
            sort: 1,
            children: []
          },
          {
            id: 722,
            value: "4",
            label: "bug反馈",
            createTime: "2019-07-08 17:41:14",
            updateTime: "2019-07-08 17:41:14",
            sort: 1,
            children: []
          },
          {
            id: 723,
            value: "5",
            label: "其他",
            createTime: "2019-07-08 17:41:25",
            updateTime: "2019-07-08 17:41:25",
            sort: 1,
            children: []
          }
        ],
        hrms_assessment_higher_opt: [
          {
            id: 1379,
            value: "1",
            label: "考核时允许查看员工自评",
            createTime: "2021-05-10 09:27:32",
            updateTime: "2021-05-10 09:27:32",
            sort: 1,
            children: []
          },
          {
            id: 1380,
            value: "2",
            label: "考核时不允许查看员工自评",
            createTime: "2021-05-10 09:27:41",
            updateTime: "2021-05-10 09:27:41",
            sort: 1,
            children: []
          }
        ],
        POLICY_STYLE: [
          {
            id: 749,
            value: "4",
            label: "意见",
            createTime: "2019-07-05 15:42:43",
            updateTime: "2019-07-05 15:42:43",
            sort: 4,
            children: []
          },
          {
            id: 750,
            value: "5",
            label: "办法",
            createTime: "2019-07-05 15:42:43",
            updateTime: "2019-07-05 15:42:43",
            sort: 5,
            children: []
          },
          {
            id: 751,
            value: "6",
            label: "通报",
            createTime: "2019-07-05 15:42:43",
            updateTime: "2019-07-05 15:42:43",
            sort: 6,
            children: []
          },
          {
            id: 752,
            value: "7",
            label: "其他",
            createTime: "2019-07-05 15:42:43",
            updateTime: "2019-07-05 15:42:43",
            sort: 7,
            children: []
          }
        ],
        JOBS: [
          {
            id: 946,
            value: "1",
            label: "董事长",
            createTime: "2019-07-05 16:10:16",
            updateTime: "2019-07-05 16:10:16",
            sort: 1,
            children: []
          },
          {
            id: 947,
            value: "2",
            label: "总经理",
            createTime: "2019-07-05 16:10:16",
            updateTime: "2019-07-05 16:10:16",
            sort: 2,
            children: []
          },
          {
            id: 948,
            value: "3",
            label: "财务",
            createTime: "2019-07-05 16:10:16",
            updateTime: "2019-07-05 16:10:16",
            sort: 3,
            children: []
          },
          {
            id: 949,
            value: "4",
            label: "科技",
            createTime: "2019-07-05 16:10:16",
            updateTime: "2019-07-05 16:10:16",
            sort: 4,
            children: []
          },
          {
            id: 950,
            value: "5",
            label: "申报专员",
            createTime: "2019-07-05 16:10:16",
            updateTime: "2019-07-05 16:10:16",
            sort: 5,
            children: []
          },
          {
            id: 951,
            value: "6",
            label: "行政",
            createTime: "2019-07-05 16:10:16",
            updateTime: "2019-07-05 16:10:16",
            sort: 6,
            children: []
          },
          {
            id: 952,
            value: "7",
            label: "人力",
            createTime: "2019-07-05 16:10:16",
            updateTime: "2019-07-05 16:10:16",
            sort: 7,
            children: []
          },
          {
            id: 953,
            value: "8",
            label: "设计",
            createTime: "2019-07-05 16:10:16",
            updateTime: "2019-07-05 16:10:16",
            sort: 8,
            children: []
          },
          {
            id: 954,
            value: "9",
            label: "技术",
            createTime: "2019-07-05 16:10:16",
            updateTime: "2019-07-05 16:10:16",
            sort: 9,
            children: []
          },
          {
            id: 955,
            value: "10",
            label: "生产",
            createTime: "2019-07-05 16:10:16",
            updateTime: "2019-07-05 16:10:16",
            sort: 10,
            children: []
          },
          {
            id: 956,
            value: "11",
            label: "采购",
            createTime: "2019-07-05 16:10:16",
            updateTime: "2019-07-05 16:10:16",
            sort: 11,
            children: []
          },
          {
            id: 957,
            value: "12",
            label: "仓储",
            createTime: "2019-07-05 16:10:16",
            updateTime: "2019-07-05 16:10:16",
            sort: 12,
            children: []
          },
          {
            id: 958,
            value: "13",
            label: "物流",
            createTime: "2019-07-05 16:10:16",
            updateTime: "2019-07-05 16:10:16",
            sort: 13,
            children: []
          },
          {
            id: 959,
            value: "14",
            label: "市场",
            createTime: "2019-07-05 16:10:16",
            updateTime: "2019-07-05 16:10:16",
            sort: 14,
            children: []
          },
          {
            id: 960,
            value: "15",
            label: "售后",
            createTime: "2019-07-05 16:10:16",
            updateTime: "2019-07-05 16:10:16",
            sort: 15,
            children: []
          },
          {
            id: 961,
            value: "16",
            label: "其他",
            createTime: "2019-07-05 16:10:16",
            updateTime: "2019-07-05 16:10:16",
            sort: 16,
            children: []
          }
        ],
        mlms_download_cost: [
          {
            id: 147,
            value: "0",
            label: "0",
            createTime: "2019-05-28 14:07:00",
            updateTime: "2019-05-28 14:07:00",
            sort: 1,
            children: []
          },
          {
            id: 148,
            value: "1",
            label: "1",
            createTime: "2019-05-28 14:07:06",
            updateTime: "2019-05-28 14:07:06",
            sort: 1,
            children: []
          },
          {
            id: 149,
            value: "2",
            label: "2",
            createTime: "2019-05-28 14:07:10",
            updateTime: "2019-05-28 14:07:10",
            sort: 1,
            children: []
          },
          {
            id: 150,
            value: "3",
            label: "5",
            createTime: "2019-05-28 14:07:16",
            updateTime: "2019-05-28 14:07:16",
            sort: 1,
            children: []
          },
          {
            id: 151,
            value: "4",
            label: "8",
            createTime: "2019-05-28 14:07:23",
            updateTime: "2019-05-28 14:07:23",
            sort: 1,
            children: []
          },
          {
            id: 152,
            value: "5",
            label: "10",
            createTime: "2019-05-28 14:07:28",
            updateTime: "2019-05-28 14:07:28",
            sort: 1,
            children: []
          },
          {
            id: 672,
            value: "6",
            label: "20",
            createTime: "2019-06-12 15:42:22",
            updateTime: "2019-06-12 15:42:22",
            sort: 1,
            children: []
          },
          {
            id: 673,
            value: "7",
            label: "30",
            createTime: "2019-06-12 15:42:56",
            updateTime: "2019-06-12 15:42:56",
            sort: 1,
            children: []
          },
          {
            id: 674,
            value: "8",
            label: "50",
            createTime: "2019-06-12 15:43:18",
            updateTime: "2019-06-12 15:43:18",
            sort: 1,
            children: []
          },
          {
            id: 675,
            value: "9",
            label: "80",
            createTime: "2019-06-12 15:43:33",
            updateTime: "2019-06-12 15:43:33",
            sort: 1,
            children: []
          },
          {
            id: 678,
            value: "10",
            label: "100",
            createTime: "2019-06-12 15:43:33",
            updateTime: "2019-06-12 15:43:33",
            sort: 1,
            children: []
          }
        ],
        crms_business_type: [
          {
            id: 83,
            value: "5",
            label: "软件",
            createTime: "2019-03-19 21:34:41",
            updateTime: "2019-03-19 21:34:41",
            sort: 1,
            children: []
          },
          {
            id: 492,
            value: "7",
            label: "产品",
            createTime: "2019-04-26 09:07:01",
            updateTime: "2019-04-26 09:07:01",
            sort: 2,
            children: []
          },
          {
            id: 82,
            value: "4",
            label: "平台",
            createTime: "2019-04-26 09:08:04",
            updateTime: "2019-04-26 09:08:04",
            sort: 3,
            children: []
          },
          {
            id: 491,
            value: "6",
            label: "咨询",
            createTime: "2019-04-26 09:08:16",
            updateTime: "2019-04-26 09:08:16",
            sort: 4,
            children: []
          },
          {
            id: 85,
            value: "2",
            label: "数据",
            createTime: "2019-04-26 09:08:27",
            updateTime: "2019-04-26 09:08:27",
            sort: 5,
            children: []
          },
          {
            id: 494,
            value: "9",
            label: "技术服务",
            createTime: "2019-04-26 09:08:36",
            updateTime: "2019-04-26 09:08:36",
            sort: 6,
            children: []
          },
          {
            id: 493,
            value: "8",
            label: "外包",
            createTime: "2019-04-26 09:08:44",
            updateTime: "2019-04-26 09:08:44",
            sort: 7,
            children: []
          },
          {
            id: 496,
            value: "11",
            label: "会议培训",
            createTime: "2019-04-26 09:08:52",
            updateTime: "2019-04-26 09:08:52",
            sort: 8,
            children: []
          },
          {
            id: 495,
            value: "10",
            label: "其他",
            createTime: "2019-04-26 09:08:58",
            updateTime: "2019-04-26 09:08:58",
            sort: 9,
            children: []
          }
        ],
        crms_client_opportunity_status: [
          {
            id: 135,
            value: "0",
            label: "未认领",
            createTime: "2019-03-21 06:10:53",
            updateTime: "2019-03-21 06:10:53",
            sort: 1,
            children: []
          },
          {
            id: 136,
            value: "1",
            label: "已认领",
            createTime: "2019-03-23 01:41:57",
            updateTime: "2019-03-23 01:41:57",
            sort: 1,
            children: []
          }
        ],
        date_time_half: [
          {
            id: 1244,
            value: "1",
            label: "上午",
            createTime: "2021-03-15 17:21:20",
            updateTime: "2021-03-15 17:21:20",
            sort: 1,
            children: []
          },
          {
            id: 1245,
            value: "2",
            label: "下午",
            createTime: "2021-03-15 17:21:24",
            updateTime: "2021-03-15 17:21:24",
            sort: 1,
            children: []
          }
        ],
        ims_path_type: [
          {
            id: 417,
            value: "2",
            label: "/goms/basic_configuration/organization_setup",
            createTime: "2019-04-17 22:53:15",
            updateTime: "2019-04-17 22:53:15",
            sort: 1,
            children: []
          },
          {
            id: 560,
            value: "4",
            label: "/hrms_spa/approval_detail",
            createTime: "2019-04-29 02:34:12",
            updateTime: "2019-04-29 02:34:12",
            sort: 1,
            children: []
          },
          {
            id: 567,
            value: "5",
            label: "/fams_spa/payroll_detail",
            createTime: "2019-05-07 15:29:00",
            updateTime: "2019-05-07 15:29:00",
            sort: 1,
            children: []
          },
          {
            id: 580,
            value: "6",
            label: "/fams_spa/fund_transfer_detail",
            createTime: "2019-05-16 15:10:30",
            updateTime: "2019-05-16 15:10:30",
            sort: 1,
            children: []
          },
          {
            id: 587,
            value: "7",
            label: "/goms/user/member_management",
            createTime: "2019-11-01 10:05:56",
            updateTime: "2019-11-01 10:05:56",
            sort: 1,
            children: []
          },
          {
            id: 590,
            value: "8",
            label: "/crms_spa/customer_detail",
            createTime: "2019-05-23 10:32:42",
            updateTime: "2019-05-23 10:32:42",
            sort: 1,
            children: []
          },
          {
            id: 679,
            value: "9",
            label: "/wel/masterConfirm",
            createTime: "2019-06-13 11:56:43",
            updateTime: "2019-06-13 11:56:43",
            sort: 1,
            children: []
          },
          {
            id: 705,
            value: "10",
            label: "/crms_spa/siness_detail",
            createTime: "2019-06-28 17:22:02",
            updateTime: "2019-06-28 17:22:02",
            sort: 1,
            children: []
          },
          {
            id: 969,
            value: "11",
            label: "//guocedata.com/detail/general",
            createTime: "2019-10-18 10:16:46",
            updateTime: "2019-10-18 10:16:46",
            sort: 1,
            children: []
          },
          {
            id: 970,
            value: "12",
            label: "//guocedata.com/detail/declare",
            createTime: "2019-10-18 10:16:49",
            updateTime: "2019-10-18 10:16:49",
            sort: 1,
            children: []
          },
          {
            id: 971,
            value: "13",
            label: "//guocedata.com/detail/explain",
            createTime: "2019-10-18 10:16:53",
            updateTime: "2019-10-18 10:16:53",
            sort: 1,
            children: []
          },
          {
            id: 972,
            value: "14",
            label: "//guocedata.com/detail/information",
            createTime: "2019-10-18 10:16:56",
            updateTime: "2019-10-18 10:16:56",
            sort: 1,
            children: []
          },
          {
            id: 975,
            value: "15",
            label: "/atms/details",
            createTime: "2019-07-18 09:11:41",
            updateTime: "2019-07-18 09:11:41",
            sort: 1,
            children: []
          },
          {
            id: 979,
            value: "16",
            label: "/wel/approval/invoice_approval",
            createTime: "2019-07-23 16:46:35",
            updateTime: "2019-07-23 16:46:35",
            sort: 1,
            children: []
          },
          {
            id: 980,
            value: "17",
            label: "/wel/approval/fee_approval",
            createTime: "2019-07-23 16:47:27",
            updateTime: "2019-07-23 16:47:27",
            sort: 1,
            children: []
          },
          {
            id: 981,
            value: "18",
            label: "/app/thought_detail",
            createTime: "2019-07-25 13:57:20",
            updateTime: "2019-07-25 13:57:20",
            sort: 1,
            children: []
          },
          {
            id: 997,
            value: "19",
            label: "/exam/personalCenter/testRecord",
            createTime: "2019-09-06 13:47:26",
            updateTime: "2019-09-06 13:47:26",
            sort: 1,
            children: []
          },
          {
            id: 1001,
            value: "20",
            label: "/wenjuan/my_question",
            createTime: "2019-08-20 13:40:28",
            updateTime: "2019-08-20 13:40:28",
            sort: 1,
            children: []
          },
          {
            id: 1002,
            value: "21",
            label: "/union/work_bench",
            createTime: "2019-08-20 14:34:01",
            updateTime: "2019-08-20 14:34:01",
            sort: 1,
            children: []
          },
          {
            id: 1013,
            value: "22",
            label: "/wel/orgwelcome",
            createTime: "2019-08-27 15:14:41",
            updateTime: "2019-08-27 15:14:41",
            sort: 1,
            children: []
          },
          {
            id: 1025,
            value: "23",
            label: "/exam/testPage/subjectTest",
            createTime: "2019-09-11 12:43:51",
            updateTime: "2019-09-11 12:43:51",
            sort: 1,
            children: []
          },
          {
            id: 1164,
            value: "24",
            label: "/wel/friend_confirm",
            createTime: "2019-10-18 16:47:19",
            updateTime: "2019-10-18 16:47:19",
            sort: 1,
            children: []
          },
          {
            id: 1165,
            value: "25",
            label: "/hrms_spa/suggestion_detail",
            createTime: "2019-10-18 11:05:15",
            updateTime: "2019-10-18 11:05:15",
            sort: 1,
            children: []
          },
          {
            id: 1179,
            value: "26",
            label: "/wel/org_confirm",
            createTime: "2019-10-24 13:59:51",
            updateTime: "2019-10-24 13:59:51",
            sort: 1,
            children: []
          },
          {
            id: 416,
            value: "1",
            label: "/mlms_spa/summary/detail",
            createTime: "2019-04-18 01:49:22",
            updateTime: "2019-04-18 01:49:22",
            sort: 2,
            children: []
          },
          {
            id: 418,
            value: "3",
            label: "普通消息",
            createTime: "2019-04-17 22:56:42",
            updateTime: "2019-04-17 22:56:42",
            sort: 3,
            children: []
          }
        ],
        COMMON_ORG_TYPE: [
          {
            id: 1191,
            value: "1",
            label: "政府",
            createTime: "2019-11-13 14:23:38",
            updateTime: "2019-11-13 14:23:38",
            sort: 1,
            children: []
          },
          {
            id: 1192,
            value: "2",
            label: "园区",
            createTime: "2019-11-13 14:24:39",
            updateTime: "2019-11-13 14:24:39",
            sort: 1,
            children: []
          },
          {
            id: 1193,
            value: "3",
            label: "协会",
            createTime: "2019-11-13 14:25:34",
            updateTime: "2019-11-13 14:25:34",
            sort: 1,
            children: []
          },
          {
            id: 1194,
            value: "4",
            label: "企业",
            createTime: "2019-11-13 14:25:55",
            updateTime: "2019-11-13 14:25:55",
            sort: 1,
            children: []
          },
          {
            id: 1195,
            value: "5",
            label: "学术机构",
            createTime: "2019-11-13 14:26:20",
            updateTime: "2019-11-13 14:26:20",
            sort: 1,
            children: []
          },
          {
            id: 1196,
            value: "6",
            label: "培训机构",
            createTime: "2019-11-13 14:26:39",
            updateTime: "2019-11-13 14:26:39",
            sort: 1,
            children: []
          },
          {
            id: 1197,
            value: "7",
            label: "会议场所",
            createTime: "2019-11-13 14:27:09",
            updateTime: "2019-11-13 14:27:09",
            sort: 1,
            children: []
          },
          {
            id: 1198,
            value: "8",
            label: "非政府组织",
            createTime: "2019-11-13 14:27:30",
            updateTime: "2019-11-13 14:27:30",
            sort: 1,
            children: []
          },
          {
            id: 1199,
            value: "9",
            label: "媒体",
            createTime: "2019-11-13 14:27:49",
            updateTime: "2019-11-13 14:27:49",
            sort: 1,
            children: []
          },
          {
            id: 1200,
            value: "10",
            label: "其它",
            createTime: "2019-11-13 14:28:09",
            updateTime: "2019-11-13 14:28:09",
            sort: 1,
            children: []
          }
        ],
        prms_business_type: [
          {
            id: 314,
            value: "1",
            label: "咨询",
            createTime: "2019-04-26 08:36:30",
            updateTime: "2019-04-26 08:36:30",
            sort: 5,
            children: [
              {
                id: 322,
                value: "1",
                label: "规划",
                createTime: "2019-04-02 21:36:14",
                updateTime: "2019-04-02 21:36:14",
                sort: 1
              },
              {
                id: 323,
                value: "2",
                label: "行动计划",
                createTime: "2019-04-02 21:36:55",
                updateTime: "2019-04-02 21:36:55",
                sort: 2
              },
              {
                id: 324,
                value: "3",
                label: "工作方案",
                createTime: "2019-04-02 21:37:04",
                updateTime: "2019-04-02 21:37:04",
                sort: 3
              },
              {
                id: 325,
                value: "4",
                label: "课题研究",
                createTime: "2019-04-02 21:37:15",
                updateTime: "2019-04-02 21:37:15",
                sort: 4
              },
              {
                id: 326,
                value: "5",
                label: "标准规范",
                createTime: "2019-04-02 21:37:22",
                updateTime: "2019-04-02 21:37:22",
                sort: 5
              },
              {
                id: 327,
                value: "6",
                label: "管理制度",
                createTime: "2019-04-02 21:37:30",
                updateTime: "2019-04-02 21:37:30",
                sort: 6
              },
              {
                id: 328,
                value: "7",
                label: "整体解决方案",
                createTime: "2019-04-02 21:37:37",
                updateTime: "2019-04-02 21:37:37",
                sort: 7
              },
              {
                id: 329,
                value: "8",
                label: "评测",
                createTime: "2019-04-02 21:37:44",
                updateTime: "2019-04-02 21:37:44",
                sort: 8
              },
              {
                id: 429,
                value: "9",
                label: "评估",
                createTime: "2019-04-24 03:48:10",
                updateTime: "2019-04-24 03:48:10",
                sort: 9
              }
            ]
          },
          {
            id: 315,
            value: "2",
            label: "产品",
            createTime: "2019-04-26 08:36:21",
            updateTime: "2019-04-26 08:36:21",
            sort: 6,
            children: [
              {
                id: 330,
                value: "10",
                label: "DNA",
                createTime: "2019-05-07 14:45:01",
                updateTime: "2019-05-07 14:45:01",
                sort: 1
              },
              {
                id: 565,
                value: "13",
                label: "营商通",
                createTime: "2019-05-07 14:45:28",
                updateTime: "2019-05-07 14:45:28",
                sort: 1
              },
              {
                id: 331,
                value: "11",
                label: "DIPS",
                createTime: "2019-05-07 14:45:09",
                updateTime: "2019-05-07 14:45:09",
                sort: 2
              },
              {
                id: 332,
                value: "12",
                label: "咨询服务产品化",
                createTime: "2019-05-07 14:45:15",
                updateTime: "2019-05-07 14:45:15",
                sort: 3
              }
            ]
          },
          {
            id: 316,
            value: "3",
            label: "数据",
            createTime: "2019-04-26 08:36:01",
            updateTime: "2019-04-26 08:36:01",
            sort: 7,
            children: [
              {
                id: 334,
                value: "14",
                label: "数据采集",
                createTime: "2019-05-07 14:45:40",
                updateTime: "2019-05-07 14:45:40",
                sort: 1
              },
              {
                id: 335,
                value: "15",
                label: "普查",
                createTime: "2019-05-07 14:45:48",
                updateTime: "2019-05-07 14:45:48",
                sort: 2
              },
              {
                id: 336,
                value: "16",
                label: "编目",
                createTime: "2019-05-07 14:45:55",
                updateTime: "2019-05-07 14:45:55",
                sort: 3
              },
              {
                id: 338,
                value: "17",
                label: "标准化",
                createTime: "2019-05-07 14:46:10",
                updateTime: "2019-05-07 14:46:10",
                sort: 4
              },
              {
                id: 339,
                value: "18",
                label: "开放共享",
                createTime: "2019-05-07 14:46:19",
                updateTime: "2019-05-07 14:46:19",
                sort: 5
              },
              {
                id: 340,
                value: "19",
                label: "应用服务",
                createTime: "2019-05-07 14:46:29",
                updateTime: "2019-05-07 14:46:29",
                sort: 6
              },
              {
                id: 341,
                value: "20",
                label: "主题库、基础库建设",
                createTime: "2019-05-07 14:46:36",
                updateTime: "2019-05-07 14:46:36",
                sort: 7
              },
              {
                id: 342,
                value: "21",
                label: "事项材料梳理",
                createTime: "2019-05-07 14:46:42",
                updateTime: "2019-05-07 14:46:42",
                sort: 8
              },
              {
                id: 343,
                value: "22",
                label: "主题清单规范优化、再造",
                createTime: "2019-05-07 14:46:49",
                updateTime: "2019-05-07 14:46:49",
                sort: 9
              }
            ]
          },
          {
            id: 319,
            value: "6",
            label: "平台",
            createTime: "2019-04-26 09:21:55",
            updateTime: "2019-04-26 09:21:55",
            sort: 7,
            children: [
              {
                id: 350,
                value: "29",
                label: "新建",
                createTime: "2019-05-07 14:47:53",
                updateTime: "2019-05-07 14:47:53",
                sort: 1
              },
              {
                id: 351,
                value: "30",
                label: "升级",
                createTime: "2019-05-07 14:47:59",
                updateTime: "2019-05-07 14:47:59",
                sort: 2
              }
            ]
          },
          {
            id: 317,
            value: "4",
            label: "外包",
            createTime: "2019-04-26 09:21:13",
            updateTime: "2019-04-26 09:21:13",
            sort: 8,
            children: [
              {
                id: 344,
                value: "23",
                label: "软件",
                createTime: "2019-05-07 14:47:03",
                updateTime: "2019-05-07 14:47:03",
                sort: 1
              },
              {
                id: 345,
                value: "24",
                label: "平台",
                createTime: "2019-05-07 14:47:08",
                updateTime: "2019-05-07 14:47:08",
                sort: 2
              },
              {
                id: 346,
                value: "25",
                label: "服务",
                createTime: "2019-05-07 14:47:15",
                updateTime: "2019-05-07 14:47:15",
                sort: 3
              }
            ]
          },
          {
            id: 320,
            value: "7",
            label: "技术服务",
            createTime: "2019-04-26 09:21:48",
            updateTime: "2019-04-26 09:21:48",
            sort: 8,
            children: [
              {
                id: 352,
                value: "31",
                label: "网站",
                createTime: "2019-05-07 14:48:16",
                updateTime: "2019-05-07 14:48:16",
                sort: 1
              },
              {
                id: 353,
                value: "32",
                label: "平台",
                createTime: "2019-05-07 14:48:21",
                updateTime: "2019-05-07 14:48:21",
                sort: 2
              },
              {
                id: 354,
                value: "33",
                label: "软件",
                createTime: "2019-05-07 14:48:26",
                updateTime: "2019-05-07 14:48:26",
                sort: 3
              }
            ]
          },
          {
            id: 318,
            value: "5",
            label: "会议培训",
            createTime: "2019-04-26 09:21:40",
            updateTime: "2019-04-26 09:21:40",
            sort: 9,
            children: [
              {
                id: 347,
                value: "26",
                label: "研讨会",
                createTime: "2019-05-07 14:47:22",
                updateTime: "2019-05-07 14:47:22",
                sort: 1
              },
              {
                id: 348,
                value: "27",
                label: "招商合作",
                createTime: "2019-05-07 14:47:29",
                updateTime: "2019-05-07 14:47:29",
                sort: 2
              },
              {
                id: 349,
                value: "28",
                label: "培训会",
                createTime: "2019-05-07 14:47:36",
                updateTime: "2019-05-07 14:47:36",
                sort: 3
              }
            ]
          },
          {
            id: 321,
            value: "8",
            label: "其它",
            createTime: "2019-04-26 09:21:07",
            updateTime: "2019-04-26 09:21:07",
            sort: 9,
            children: [
              {
                id: 566,
                value: "34",
                label: "其他",
                createTime: "2019-05-07 14:48:35",
                updateTime: "2019-05-07 14:48:35",
                sort: 1
              }
            ]
          }
        ],
        pgbd_adoption_method: [
          {
            id: 993,
            value: "1",
            label: "等同（直接翻译）",
            createTime: "2019-08-06 14:46:47",
            updateTime: "2019-08-06 14:46:47",
            sort: 1,
            children: []
          },
          {
            id: 994,
            value: "2",
            label: "等效（翻译+部分修改）",
            createTime: "2019-08-06 14:46:57",
            updateTime: "2019-08-06 14:46:57",
            sort: 1,
            children: []
          },
          {
            id: 995,
            value: "3",
            label: "参照（依照国际标准重新编写）",
            createTime: "2019-08-06 14:47:10",
            updateTime: "2019-08-06 14:47:10",
            sort: 1,
            children: []
          }
        ],
        FAMS_EQUITY_TYPE: [
          {
            id: 1018,
            value: "1",
            label: "非流通股本",
            createTime: "2019-08-28 11:24:55",
            updateTime: "2019-08-28 11:24:55",
            sort: 1,
            children: []
          },
          {
            id: 1019,
            value: "2",
            label: "流通股本",
            createTime: "2019-08-28 11:25:06",
            updateTime: "2019-08-28 11:25:06",
            sort: 1,
            children: []
          }
        ],
        hrms_app_way: [
          {
            id: 33,
            value: "1",
            label: "智联",
            createTime: "2019-03-10 03:29:11",
            updateTime: "2019-03-10 03:29:11",
            sort: 1,
            children: []
          },
          {
            id: 34,
            value: "2",
            label: "51JOB",
            createTime: "2019-03-10 03:29:18",
            updateTime: "2019-03-10 03:29:18",
            sort: 1,
            children: []
          },
          {
            id: 35,
            value: "3",
            label: "专家推荐",
            createTime: "2019-03-10 03:29:24",
            updateTime: "2019-03-10 03:29:24",
            sort: 1,
            children: []
          },
          {
            id: 36,
            value: "4",
            label: "老员工回归",
            createTime: "2019-03-10 03:29:51",
            updateTime: "2019-03-10 03:29:51",
            sort: 1,
            children: []
          },
          {
            id: 37,
            value: "5",
            label: "内部推荐",
            createTime: "2019-03-10 03:29:59",
            updateTime: "2019-03-10 03:29:59",
            sort: 1,
            children: []
          },
          {
            id: 38,
            value: "6",
            label: "校招",
            createTime: "2019-03-10 03:30:09",
            updateTime: "2019-03-10 03:30:09",
            sort: 1,
            children: []
          },
          {
            id: 39,
            value: "7",
            label: "官网",
            createTime: "2019-03-10 03:30:21",
            updateTime: "2019-03-10 03:30:21",
            sort: 1,
            children: []
          },
          {
            id: 41,
            value: "9",
            label: "本地人才网",
            createTime: "2019-03-10 03:30:38",
            updateTime: "2019-03-10 03:30:38",
            sort: 1,
            children: []
          },
          {
            id: 40,
            value: "8",
            label: "其他",
            createTime: "2019-04-26 09:16:46",
            updateTime: "2019-04-26 09:16:46",
            sort: 2,
            children: []
          }
        ],
        prms_project_budget: [
          {
            id: 591,
            value: "1",
            label: "人力成本",
            createTime: "2019-05-22 13:55:21",
            updateTime: "2019-05-22 13:55:21",
            sort: 1,
            children: []
          },
          {
            id: 600,
            value: "2",
            label: "项目提成",
            createTime: "2019-05-22 13:56:11",
            updateTime: "2019-05-22 13:56:11",
            sort: 1,
            children: []
          },
          {
            id: 601,
            value: "3",
            label: "税费",
            createTime: "2019-05-22 13:56:21",
            updateTime: "2019-05-22 13:56:21",
            sort: 1,
            children: []
          },
          {
            id: 602,
            value: "4",
            label: "中标服务费",
            createTime: "2019-05-22 13:56:55",
            updateTime: "2019-05-22 13:56:55",
            sort: 1,
            children: []
          },
          {
            id: 603,
            value: "5",
            label: "外包费用",
            createTime: "2019-05-22 13:57:06",
            updateTime: "2019-05-22 13:57:06",
            sort: 1,
            children: []
          },
          {
            id: 604,
            value: "6",
            label: "项目评审专家费",
            createTime: "2019-05-22 13:57:18",
            updateTime: "2019-05-22 13:57:18",
            sort: 1,
            children: []
          },
          {
            id: 605,
            value: "7",
            label: "佣金",
            createTime: "2019-05-22 13:57:30",
            updateTime: "2019-05-22 13:57:30",
            sort: 1,
            children: []
          },
          {
            id: 606,
            value: "8",
            label: "其他",
            createTime: "2019-05-22 13:57:38",
            updateTime: "2019-05-22 13:57:38",
            sort: 1,
            children: []
          },
          {
            id: 607,
            value: "9",
            label: "项目管理费",
            createTime: "2019-05-22 13:57:51",
            updateTime: "2019-05-22 13:57:51",
            sort: 1,
            children: []
          },
          {
            id: 608,
            value: "10",
            label: "开票费用",
            createTime: "2019-05-22 13:58:01",
            updateTime: "2019-05-22 13:58:01",
            sort: 1,
            children: []
          },
          {
            id: 609,
            value: "11",
            label: "差旅费",
            createTime: "2019-05-22 13:58:14",
            updateTime: "2019-05-22 13:58:14",
            sort: 1,
            children: []
          },
          {
            id: 611,
            value: "12",
            label: "预估利润",
            createTime: "2019-05-22 14:01:10",
            updateTime: "2019-05-22 14:01:10",
            sort: 1,
            children: []
          }
        ],
        fams_wealth_rules: [
          {
            id: 630,
            value: "2",
            label: "建议",
            createTime: "2019-05-28 10:47:04",
            updateTime: "2019-05-28 10:47:04",
            sort: 1,
            children: []
          },
          {
            id: 631,
            value: "3",
            label: "师徒积分",
            createTime: "2019-05-28 10:46:30",
            updateTime: "2019-05-28 10:46:30",
            sort: 1,
            children: []
          },
          {
            id: 632,
            value: "4",
            label: "月报",
            createTime: "2019-05-28 10:54:55",
            updateTime: "2019-05-28 10:54:55",
            sort: 1,
            children: []
          },
          {
            id: 633,
            value: "5",
            label: "周报",
            createTime: "2019-05-28 10:55:01",
            updateTime: "2019-05-28 10:55:01",
            sort: 1,
            children: []
          },
          {
            id: 634,
            value: "6",
            label: "商机",
            createTime: "2019-05-28 10:47:40",
            updateTime: "2019-05-28 10:47:40",
            sort: 1,
            children: []
          },
          {
            id: 635,
            value: "7",
            label: "培训纪要",
            createTime: "2019-05-28 10:48:17",
            updateTime: "2019-05-28 10:48:17",
            sort: 1,
            children: []
          },
          {
            id: 636,
            value: "8",
            label: "拜访纪要",
            createTime: "2019-05-28 10:51:09",
            updateTime: "2019-05-28 10:51:09",
            sort: 1,
            children: []
          },
          {
            id: 637,
            value: "9",
            label: "材料库",
            createTime: "2019-05-28 10:53:54",
            updateTime: "2019-05-28 10:53:54",
            sort: 1,
            children: []
          },
          {
            id: 638,
            value: "10",
            label: "会议纪要",
            createTime: "2019-05-28 10:54:07",
            updateTime: "2019-05-28 10:54:07",
            sort: 1,
            children: []
          },
          {
            id: 639,
            value: "11",
            label: "拜访纪要",
            createTime: "2019-05-28 10:54:30",
            updateTime: "2019-05-28 10:54:30",
            sort: 1,
            children: []
          },
          {
            id: 640,
            value: "12",
            label: "日报",
            createTime: "2019-05-28 10:54:48",
            updateTime: "2019-05-28 10:54:48",
            sort: 1,
            children: []
          },
          {
            id: 641,
            value: "13",
            label: "个人资料",
            createTime: "2019-05-28 10:55:26",
            updateTime: "2019-05-28 10:55:26",
            sort: 1,
            children: []
          },
          {
            id: 642,
            value: "14",
            label: "注册",
            createTime: "2019-05-28 10:55:42",
            updateTime: "2019-05-28 10:55:42",
            sort: 1,
            children: []
          },
          {
            id: 643,
            value: "15",
            label: "签到",
            createTime: "2019-05-28 10:55:52",
            updateTime: "2019-05-28 10:55:52",
            sort: 1,
            children: []
          },
          {
            id: 657,
            value: "16",
            label: "联系客户记录",
            createTime: "2019-05-28 11:22:03",
            updateTime: "2019-05-28 11:22:03",
            sort: 1,
            children: []
          },
          {
            id: 658,
            value: "17",
            label: "客户资讯",
            createTime: "2019-05-28 11:22:19",
            updateTime: "2019-05-28 11:22:19",
            sort: 1,
            children: []
          },
          {
            id: 662,
            value: "18",
            label: "打赏",
            createTime: "2019-05-28 17:13:45",
            updateTime: "2019-05-28 17:13:45",
            sort: 1,
            children: []
          },
          {
            id: 665,
            value: "19",
            label: "员工生日",
            createTime: "2019-06-04 16:21:48",
            updateTime: "2019-06-04 16:21:48",
            sort: 1,
            children: []
          },
          {
            id: 694,
            value: "20",
            label: "说说",
            createTime: "2019-06-21 14:01:48",
            updateTime: "2019-06-21 14:01:48",
            sort: 1,
            children: []
          },
          {
            id: 695,
            value: "21",
            label: "被点赞",
            createTime: "2019-06-21 14:02:52",
            updateTime: "2019-06-21 14:02:52",
            sort: 1,
            children: []
          },
          {
            id: 696,
            value: "22",
            label: "被评论",
            createTime: "2019-06-21 14:03:04",
            updateTime: "2019-06-21 14:03:04",
            sort: 1,
            children: []
          },
          {
            id: 716,
            value: "23",
            label: "互助基金",
            createTime: "2019-07-05 10:24:02",
            updateTime: "2019-07-05 10:24:02",
            sort: 1,
            children: []
          },
          {
            id: 1020,
            value: "24",
            label: "股权投资",
            createTime: "2019-09-03 14:04:18",
            updateTime: "2019-09-03 14:04:18",
            sort: 1,
            children: []
          },
          {
            id: 1023,
            value: "25",
            label: "员工转正",
            createTime: "2019-09-09 11:15:10",
            updateTime: "2019-09-09 11:15:10",
            sort: 1,
            children: []
          },
          {
            id: 1024,
            value: "26",
            label: "员工离职",
            createTime: "2019-09-09 11:15:27",
            updateTime: "2019-09-09 11:15:27",
            sort: 1,
            children: []
          }
        ],
        FAMS_I_CAN_FLOW_TYPE: [
          {
            id: 1157,
            value: "1",
            label: "转账",
            createTime: "2019-09-26 11:02:33",
            updateTime: "2019-09-26 11:02:33",
            sort: 1,
            children: []
          },
          {
            id: 1158,
            value: "2",
            label: "创建组织奖励",
            createTime: "2019-09-26 11:02:48",
            updateTime: "2019-09-26 11:02:48",
            sort: 1,
            children: []
          },
          {
            id: 1159,
            value: "3",
            label: "完善组织详情奖励",
            createTime: "2019-09-26 11:02:58",
            updateTime: "2019-09-26 11:02:58",
            sort: 1,
            children: []
          },
          {
            id: 1160,
            value: "4",
            label: "拓展组织成员奖励",
            createTime: "2019-09-26 11:03:12",
            updateTime: "2019-09-26 11:03:12",
            sort: 1,
            children: []
          },
          {
            id: 1161,
            value: "5",
            label: "分配成员角色奖励",
            createTime: "2019-09-26 11:03:28",
            updateTime: "2019-09-26 11:03:28",
            sort: 1,
            children: []
          },
          {
            id: 1162,
            value: "6",
            label: "设立部门奖励",
            createTime: "2019-09-26 11:03:39",
            updateTime: "2019-09-26 11:03:39",
            sort: 1,
            children: []
          },
          {
            id: 1163,
            value: "7",
            label: "发币",
            createTime: "2019-09-26 16:02:32",
            updateTime: "2019-09-26 16:02:32",
            sort: 1,
            children: []
          },
          {
            id: 1167,
            value: "8",
            label: "个人信息完善奖励",
            createTime: "2019-10-31 20:50:12",
            updateTime: "2019-10-31 20:50:12",
            sort: 1,
            children: []
          },
          {
            id: 1168,
            value: "9",
            label: "邀请用户入驻",
            createTime: "2019-10-31 20:50:27",
            updateTime: "2019-10-31 20:50:27",
            sort: 1,
            children: []
          },
          {
            id: 1169,
            value: "10",
            label: "上传生态开放的材料",
            createTime: "2019-10-31 20:50:40",
            updateTime: "2019-10-31 20:50:40",
            sort: 1,
            children: []
          },
          {
            id: 1170,
            value: "11",
            label: "发表评论",
            createTime: "2019-10-31 20:50:56",
            updateTime: "2019-10-31 20:50:56",
            sort: 1,
            children: []
          },
          {
            id: 1171,
            value: "12",
            label: "生态开放商机发布",
            createTime: "2019-10-31 20:51:36",
            updateTime: "2019-10-31 20:51:36",
            sort: 1,
            children: []
          },
          {
            id: 1172,
            value: "13",
            label: "发布生态开放的说说",
            createTime: "2019-10-31 20:51:54",
            updateTime: "2019-10-31 20:51:54",
            sort: 1,
            children: []
          }
        ],
        hrms_assessment_cycle_type: [
          {
            id: 1376,
            value: "1",
            label: "月度",
            createTime: "2021-05-10 09:25:06",
            updateTime: "2021-05-10 09:25:06",
            sort: 1,
            children: []
          },
          {
            id: 1377,
            value: "2",
            label: "季度",
            createTime: "2021-05-10 09:25:11",
            updateTime: "2021-05-10 09:25:11",
            sort: 1,
            children: []
          },
          {
            id: 1378,
            value: "3",
            label: "年度",
            createTime: "2021-05-10 09:25:18",
            updateTime: "2021-05-10 09:25:18",
            sort: 1,
            children: []
          }
        ],
        ims_msg_type: [
          {
            id: 138,
            value: "0",
            label: "全部",
            createTime: "2019-04-30 18:55:53",
            updateTime: "2019-04-30 18:55:53",
            sort: 1,
            children: []
          },
          {
            id: 137,
            value: "7",
            label: "星标",
            createTime: "2019-04-30 18:56:48",
            updateTime: "2019-04-30 18:56:48",
            sort: 2,
            children: []
          },
          {
            id: 6,
            value: "5",
            label: "提醒",
            createTime: "2019-04-30 18:59:03",
            updateTime: "2019-04-30 18:59:03",
            sort: 3,
            children: []
          },
          {
            id: 2,
            value: "1",
            label: "纪要",
            createTime: "2019-04-30 18:59:07",
            updateTime: "2019-04-30 18:59:07",
            sort: 4,
            children: []
          },
          {
            id: 5,
            value: "4",
            label: "审批",
            createTime: "2019-04-30 18:59:12",
            updateTime: "2019-04-30 18:59:12",
            sort: 5,
            children: []
          },
          {
            id: 4,
            value: "3",
            label: "财富",
            createTime: "2019-04-30 18:59:18",
            updateTime: "2019-04-30 18:59:18",
            sort: 6,
            children: []
          },
          {
            id: 3,
            value: "2",
            label: "任务",
            createTime: "2019-04-18 04:35:44",
            updateTime: "2019-04-18 04:35:44",
            sort: 8,
            children: []
          },
          {
            id: 7,
            value: "6",
            label: "其他",
            createTime: "2019-04-30 18:56:00",
            updateTime: "2019-04-30 18:56:00",
            sort: 9,
            children: []
          },
          {
            id: 1189,
            value: "9",
            label: "待处理",
            createTime: "2019-11-13 09:36:00",
            updateTime: "2019-11-13 09:36:00",
            sort: 9,
            children: []
          },
          {
            id: 666,
            value: "8",
            label: "系统",
            createTime: "2019-06-05 11:19:23",
            updateTime: "2019-06-05 11:19:23",
            sort: 10,
            children: []
          }
        ],
        mlms_contract_status: [
          {
            id: 127,
            value: "1",
            label: "执行中",
            createTime: "2019-03-21 02:21:48",
            updateTime: "2019-03-21 02:21:48",
            sort: 1,
            children: []
          },
          {
            id: 128,
            value: "2",
            label: "延迟",
            createTime: "2019-03-21 02:21:57",
            updateTime: "2019-03-21 02:21:57",
            sort: 1,
            children: []
          },
          {
            id: 129,
            value: "3",
            label: "结束",
            createTime: "2019-03-21 02:22:06",
            updateTime: "2019-03-21 02:22:06",
            sort: 1,
            children: []
          },
          {
            id: 130,
            value: "4",
            label: "意外终止",
            createTime: "2019-03-21 02:22:16",
            updateTime: "2019-03-21 02:22:16",
            sort: 1,
            children: []
          }
        ],
        fams_current_bill_flow_type: [
          {
            id: 359,
            value: "1",
            label: "利息",
            createTime: "2019-04-12 23:09:23",
            updateTime: "2019-04-12 23:09:23",
            sort: 1,
            children: []
          },
          {
            id: 360,
            value: "2",
            label: "组织打赏（个人）",
            createTime: "2019-04-12 23:10:56",
            updateTime: "2019-04-12 23:10:56",
            sort: 1,
            children: []
          },
          {
            id: 361,
            value: "3",
            label: "组织扣减（个人）",
            createTime: "2019-04-12 23:10:43",
            updateTime: "2019-04-12 23:10:43",
            sort: 1,
            children: []
          },
          {
            id: 362,
            value: "4",
            label: "其他",
            createTime: "2019-04-12 23:09:55",
            updateTime: "2019-04-12 23:09:55",
            sort: 1,
            children: []
          },
          {
            id: 363,
            value: "5",
            label: "组织往来账结算",
            createTime: "2019-04-12 23:10:30",
            updateTime: "2019-04-12 23:10:30",
            sort: 1,
            children: []
          },
          {
            id: 364,
            value: "6",
            label: "组织借款",
            createTime: "2019-04-12 23:10:23",
            updateTime: "2019-04-12 23:10:23",
            sort: 1,
            children: []
          },
          {
            id: 365,
            value: "7",
            label: "组织转账",
            createTime: "2019-04-12 23:11:07",
            updateTime: "2019-04-12 23:11:07",
            sort: 1,
            children: []
          },
          {
            id: 366,
            value: "8",
            label: "组织还款",
            createTime: "2019-04-12 23:11:22",
            updateTime: "2019-04-12 23:11:22",
            sort: 1,
            children: []
          },
          {
            id: 367,
            value: "9",
            label: "集团奖励",
            createTime: "2019-04-12 23:11:34",
            updateTime: "2019-04-12 23:11:34",
            sort: 1,
            children: []
          },
          {
            id: 368,
            value: "10",
            label: "集团扣减",
            createTime: "2019-04-12 23:11:42",
            updateTime: "2019-04-12 23:11:42",
            sort: 1,
            children: []
          },
          {
            id: 370,
            value: "11",
            label: "员工提现",
            createTime: "2019-04-12 23:39:12",
            updateTime: "2019-04-12 23:39:12",
            sort: 1,
            children: []
          },
          {
            id: 562,
            value: "14",
            label: "日常报销",
            createTime: "2019-05-07 13:46:29",
            updateTime: "2019-05-07 13:46:29",
            sort: 1,
            children: []
          },
          {
            id: 563,
            value: "13",
            label: "项目报销",
            createTime: "2019-05-07 13:35:23",
            updateTime: "2019-05-07 13:35:23",
            sort: 1,
            children: []
          },
          {
            id: 564,
            value: "12",
            label: "员工工资",
            createTime: "2019-05-07 13:46:34",
            updateTime: "2019-05-07 13:46:34",
            sort: 1,
            children: []
          },
          {
            id: 579,
            value: "15",
            label: "税收",
            createTime: "2019-06-24 13:54:52",
            updateTime: "2019-06-24 13:54:52",
            sort: 1,
            children: []
          },
          {
            id: 700,
            value: "16",
            label: "费用代缴",
            createTime: "2019-06-24 13:54:56",
            updateTime: "2019-06-24 13:54:56",
            sort: 1,
            children: []
          },
          {
            id: 702,
            value: "17",
            label: "项目提成",
            createTime: "2019-06-27 11:08:20",
            updateTime: "2019-06-27 11:08:20",
            sort: 1,
            children: []
          },
          {
            id: 973,
            value: "18",
            label: "收支代缴",
            createTime: "2019-07-16 14:16:39",
            updateTime: "2019-07-16 14:16:39",
            sort: 1,
            children: []
          },
          {
            id: 974,
            value: "19",
            label: "收支代收",
            createTime: "2019-07-16 14:16:47",
            updateTime: "2019-07-16 14:16:47",
            sort: 1,
            children: []
          },
          {
            id: 982,
            value: "20",
            label: "员工入职奖励",
            createTime: "2019-08-01 15:35:37",
            updateTime: "2019-08-01 15:35:37",
            sort: 1,
            children: []
          },
          {
            id: 983,
            value: "21",
            label: "员工离职惩罚",
            createTime: "2019-08-01 15:35:52",
            updateTime: "2019-08-01 15:35:52",
            sort: 1,
            children: []
          },
          {
            id: 1021,
            value: "22",
            label: "内网使用费",
            createTime: "2019-09-05 15:52:55",
            updateTime: "2019-09-05 15:52:55",
            sort: 1,
            children: []
          },
          {
            id: 1022,
            value: "23",
            label: "内网使用费分成",
            createTime: "2019-09-05 16:47:35",
            updateTime: "2019-09-05 16:47:35",
            sort: 1,
            children: []
          }
        ],
        GOMS_ORG_TYPE: [
          {
            id: 1003,
            value: "1",
            label: "企业",
            createTime: "2019-08-20 15:14:56",
            updateTime: "2019-08-20 15:14:56",
            sort: 1,
            children: []
          },
          {
            id: 1004,
            value: "2",
            label: "协会商会",
            createTime: "2019-08-20 15:15:04",
            updateTime: "2019-08-20 15:15:04",
            sort: 1,
            children: []
          },
          {
            id: 1005,
            value: "3",
            label: "园区",
            createTime: "2019-08-20 15:15:10",
            updateTime: "2019-08-20 15:15:10",
            sort: 1,
            children: []
          },
          {
            id: 1006,
            value: "4",
            label: "社群",
            createTime: "2019-08-20 15:15:18",
            updateTime: "2019-08-20 15:15:18",
            sort: 1,
            children: []
          },
          {
            id: 1007,
            value: "5",
            label: "科研院所",
            createTime: "2019-09-11 14:19:06",
            updateTime: "2019-09-11 14:19:06",
            sort: 1,
            children: []
          },
          {
            id: 1008,
            value: "6",
            label: "公益组织",
            createTime: "2019-08-20 15:15:32",
            updateTime: "2019-08-20 15:15:32",
            sort: 1,
            children: []
          }
        ],
        expiration_date: [
          {
            id: 1242,
            value: "1",
            label: "按自然年（1月1日-12月31日）",
            createTime: "2021-03-10 16:56:04",
            updateTime: "2021-03-10 16:56:04",
            sort: 1,
            children: []
          },
          {
            id: 1243,
            value: "2",
            label: "按入职日期起12个月",
            createTime: "2021-03-10 16:56:12",
            updateTime: "2021-03-10 16:56:12",
            sort: 1,
            children: []
          }
        ],
        common_sex: [
          {
            id: 1277,
            value: "1",
            label: "男",
            createTime: "2021-04-09 14:23:27",
            updateTime: "2021-04-09 14:23:27",
            sort: 1,
            children: []
          },
          {
            id: 1278,
            value: "2",
            label: "女",
            createTime: "2021-04-09 14:23:31",
            updateTime: "2021-04-09 14:23:31",
            sort: 1,
            children: []
          },
          {
            id: 1279,
            value: "0",
            label: "未知",
            createTime: "2021-04-09 14:26:27",
            updateTime: "2021-04-09 14:26:27",
            sort: 1,
            children: []
          }
        ],
        POLICY_MAIN: [
          {
            id: 896,
            value: "1",
            label: "部门解读",
            createTime: "2019-07-05 16:04:04",
            updateTime: "2019-07-05 16:04:04",
            sort: 1,
            children: []
          },
          {
            id: 897,
            value: "2",
            label: "专家解读",
            createTime: "2019-07-05 16:04:04",
            updateTime: "2019-07-05 16:04:04",
            sort: 2,
            children: []
          },
          {
            id: 898,
            value: "3",
            label: "媒体解读",
            createTime: "2019-07-05 16:04:04",
            updateTime: "2019-07-05 16:04:04",
            sort: 3,
            children: []
          }
        ],
        retain_decimal_places: [
          {
            id: 1346,
            value: "1",
            label: "1位",
            createTime: "2021-04-20 10:37:05",
            updateTime: "2021-04-20 10:37:05",
            sort: 1,
            children: []
          },
          {
            id: 1347,
            value: "2",
            label: "2位",
            createTime: "2021-04-20 10:37:12",
            updateTime: "2021-04-20 10:37:12",
            sort: 1,
            children: []
          }
        ],
        edu_train_place_online: [
          {
            id: 1315,
            value: "1",
            label: "腾讯会议",
            createTime: "2021-04-14 14:46:12",
            updateTime: "2021-04-14 14:46:12",
            sort: 1,
            children: []
          },
          {
            id: 1316,
            value: "2",
            label: "钉钉",
            createTime: "2021-04-14 14:46:18",
            updateTime: "2021-04-14 14:46:18",
            sort: 1,
            children: []
          },
          {
            id: 1317,
            value: "3",
            label: "QQ直播",
            createTime: "2021-04-14 14:46:22",
            updateTime: "2021-04-14 14:46:22",
            sort: 1,
            children: []
          }
        ],
        edu_train_form: [
          {
            id: 1312,
            value: "1",
            label: "教学沙龙",
            createTime: "2021-04-14 14:44:45",
            updateTime: "2021-04-14 14:44:45",
            sort: 1,
            children: []
          },
          {
            id: 1313,
            value: "2",
            label: "专家讲座",
            createTime: "2021-04-14 14:44:53",
            updateTime: "2021-04-14 14:44:53",
            sort: 1,
            children: []
          },
          {
            id: 1314,
            value: "3",
            label: "教师研习营",
            createTime: "2021-04-14 14:45:05",
            updateTime: "2021-04-14 14:45:05",
            sort: 1,
            children: []
          }
        ],
        employee_status: [
          {
            id: 1269,
            value: "1",
            label: "正式员工",
            createTime: "2021-04-07 10:48:52",
            updateTime: "2021-04-07 10:48:52",
            sort: 1,
            children: []
          },
          {
            id: 1270,
            value: "2",
            label: "试用期员工",
            createTime: "2021-04-07 10:48:59",
            updateTime: "2021-04-07 10:48:59",
            sort: 1,
            children: []
          },
          {
            id: 1274,
            value: "6",
            label: "离职员工",
            createTime: "2021-04-07 10:49:27",
            updateTime: "2021-04-07 10:49:27",
            sort: 1,
            children: []
          }
        ],
        COMMON_ORG_LEVEL: [
          {
            id: 1201,
            value: "1",
            label: "国家级",
            createTime: "2019-11-13 14:29:29",
            updateTime: "2019-11-13 14:29:29",
            sort: 1,
            children: []
          },
          {
            id: 1202,
            value: "2",
            label: "省级",
            createTime: "2019-11-13 14:29:51",
            updateTime: "2019-11-13 14:29:51",
            sort: 1,
            children: []
          },
          {
            id: 1203,
            value: "3",
            label: "市级",
            createTime: "2019-11-13 14:30:17",
            updateTime: "2019-11-13 14:30:17",
            sort: 1,
            children: []
          },
          {
            id: 1204,
            value: "4",
            label: "区级(县级)",
            createTime: "2019-11-13 14:30:37",
            updateTime: "2019-11-13 14:30:37",
            sort: 1,
            children: []
          }
        ],
        fams_approval_type: [
          {
            id: 1247,
            value: "invoice",
            label: "发票",
            createTime: "2021-03-25 14:39:21",
            updateTime: "2021-03-25 14:39:21",
            sort: 1,
            children: []
          },
          {
            id: 1248,
            value: "fee",
            label: "费用",
            createTime: "2021-03-25 14:39:32",
            updateTime: "2021-03-25 14:39:32",
            sort: 1,
            children: []
          },
          {
            id: 1249,
            value: "billing",
            label: "开票",
            createTime: "2021-03-25 14:39:42",
            updateTime: "2021-03-25 14:39:42",
            sort: 1,
            children: []
          },
          {
            id: 1250,
            value: "reimbursement",
            label: "报销",
            createTime: "2021-03-25 14:39:51",
            updateTime: "2021-03-25 14:39:51",
            sort: 1,
            children: []
          }
        ],
        hrms_assessment_template_type: [
          {
            id: 1364,
            value: "1",
            label: "多维度考核",
            createTime: "2021-04-29 16:37:57",
            updateTime: "2021-04-29 16:37:57",
            sort: 1,
            children: []
          },
          {
            id: 1365,
            value: "2",
            label: "总结式考核",
            createTime: "2021-04-29 16:38:03",
            updateTime: "2021-04-29 16:38:03",
            sort: 1,
            children: []
          }
        ],
        minimum_leave_unit: [
          {
            id: 1233,
            value: "1",
            label: "按小时",
            createTime: "2021-03-17 17:12:36",
            updateTime: "2021-03-17 17:12:36",
            sort: 1,
            children: []
          },
          {
            id: 1234,
            value: "2",
            label: "按天",
            createTime: "2021-03-17 17:12:39",
            updateTime: "2021-03-17 17:12:39",
            sort: 1,
            children: []
          },
          {
            id: 1235,
            value: "3",
            label: "按半天",
            createTime: "2021-03-17 17:12:41",
            updateTime: "2021-03-17 17:12:41",
            sort: 1,
            children: []
          }
        ],
        prms_project_type: [
          {
            id: 312,
            value: "1",
            label: "内部项目",
            createTime: "2019-04-02 21:33:48",
            updateTime: "2019-04-02 21:33:48",
            sort: 1,
            children: []
          },
          {
            id: 313,
            value: "2",
            label: "外部项目",
            createTime: "2019-04-02 21:34:00",
            updateTime: "2019-04-02 21:34:00",
            sort: 2,
            children: []
          }
        ],
        course_progress: [
          {
            id: 1230,
            value: "1",
            label: "开始",
            createTime: "2021-03-05 09:09:17",
            updateTime: "2021-03-05 09:09:17",
            sort: 1,
            children: []
          },
          {
            id: 1231,
            value: "2",
            label: "学习中",
            createTime: "2021-03-05 09:09:19",
            updateTime: "2021-03-05 09:09:19",
            sort: 2,
            children: []
          },
          {
            id: 1232,
            value: "3",
            label: "学习完成",
            createTime: "2021-03-05 09:09:23",
            updateTime: "2021-03-05 09:09:23",
            sort: 3,
            children: []
          }
        ],
        hrms_assessment_admin_status: [
          {
            id: 1373,
            value: "0",
            label: "草稿",
            createTime: "2021-05-10 09:22:08",
            updateTime: "2021-05-10 09:22:08",
            sort: 1,
            children: []
          },
          {
            id: 1374,
            value: "1",
            label: "进行中",
            createTime: "2021-05-10 09:22:13",
            updateTime: "2021-05-10 09:22:13",
            sort: 1,
            children: []
          },
          {
            id: 1375,
            value: "2",
            label: "已结束",
            createTime: "2021-05-10 09:22:24",
            updateTime: "2021-05-10 09:22:24",
            sort: 1,
            children: []
          }
        ],
        cpms_module_type: [
          {
            id: 499,
            value: "1",
            label: "应用服务",
            createTime: "2019-04-26 21:25:41",
            updateTime: "2019-04-26 21:25:41",
            sort: 1,
            children: []
          },
          {
            id: 500,
            value: "2",
            label: "数据服务",
            createTime: "2019-04-26 21:25:52",
            updateTime: "2019-04-26 21:25:52",
            sort: 1,
            children: []
          },
          {
            id: 501,
            value: "3",
            label: "公共服务",
            createTime: "2019-04-26 21:26:04",
            updateTime: "2019-04-26 21:26:04",
            sort: 1,
            children: []
          },
          {
            id: 502,
            value: "4",
            label: "基础服务",
            createTime: "2019-04-26 21:26:16",
            updateTime: "2019-04-26 21:26:16",
            sort: 1,
            children: []
          }
        ],
        pgbd_standard_nature: [
          {
            id: 991,
            value: "1",
            label: "强制性标准",
            createTime: "2019-08-06 14:45:08",
            updateTime: "2019-08-06 14:45:08",
            sort: 1,
            children: []
          },
          {
            id: 992,
            value: "2",
            label: "推荐性标准",
            createTime: "2019-08-06 14:45:22",
            updateTime: "2019-08-06 14:45:22",
            sort: 1,
            children: []
          }
        ],
        POLICY_STAGE: [
          {
            id: 940,
            value: "1",
            label: "征求意见稿",
            createTime: "2019-07-05 16:06:42",
            updateTime: "2019-07-05 16:06:42",
            sort: 1,
            children: []
          },
          {
            id: 941,
            value: "2",
            label: "已印发",
            createTime: "2019-07-05 16:06:42",
            updateTime: "2019-07-05 16:06:42",
            sort: 2,
            children: []
          }
        ],
        lock_org_staus: [
          {
            id: 1394,
            value: "0",
            label: "正常",
            createTime: "2021-05-19 16:12:02",
            updateTime: "2021-05-19 16:12:02",
            sort: 1,
            children: []
          },
          {
            id: 1395,
            value: "1",
            label: "审核中",
            createTime: "2021-05-19 16:12:07",
            updateTime: "2021-05-19 16:12:07",
            sort: 1,
            children: []
          },
          {
            id: 1396,
            value: "2",
            label: "锁定",
            createTime: "2021-05-19 16:12:12",
            updateTime: "2021-05-19 16:12:12",
            sort: 1,
            children: []
          }
        ],
        hrms_approval_status: [
          {
            id: 131,
            value: "0",
            label: "未审核",
            createTime: "2019-03-21 04:12:31",
            updateTime: "2019-03-21 04:12:31",
            sort: 1,
            children: []
          },
          {
            id: 132,
            value: "1",
            label: "同意",
            createTime: "2019-03-21 04:12:42",
            updateTime: "2019-03-21 04:12:42",
            sort: 1,
            children: []
          },
          {
            id: 133,
            value: "2",
            label: "拒绝",
            createTime: "2019-03-21 04:12:50",
            updateTime: "2019-03-21 04:12:50",
            sort: 1,
            children: []
          },
          {
            id: 134,
            value: "3",
            label: "转交",
            createTime: "2019-03-21 04:13:00",
            updateTime: "2019-03-21 04:13:00",
            sort: 1,
            children: []
          }
        ],
        hrms_marriage_status: [
          {
            id: 29,
            value: "1",
            label: "未婚",
            createTime: "2019-03-10 03:27:39",
            updateTime: "2019-03-10 03:27:39",
            sort: 1,
            children: []
          },
          {
            id: 30,
            value: "2",
            label: "已婚",
            createTime: "2019-03-10 03:27:47",
            updateTime: "2019-03-10 03:27:47",
            sort: 1,
            children: []
          },
          {
            id: 31,
            value: "3",
            label: "离异",
            createTime: "2019-03-10 03:27:55",
            updateTime: "2019-03-10 03:27:55",
            sort: 1,
            children: []
          },
          {
            id: 32,
            value: "4",
            label: "丧偶",
            createTime: "2019-03-10 03:28:05",
            updateTime: "2019-03-10 03:28:05",
            sort: 1,
            children: []
          }
        ],
        cpms_task_status: [
          {
            id: 1401,
            value: "1",
            label: "未完成",
            createTime: "2021-06-03 14:29:31",
            updateTime: "2021-06-03 14:29:31",
            sort: 1,
            children: []
          },
          {
            id: 1402,
            value: "2",
            label: "已完成",
            createTime: "2021-06-03 14:29:37",
            updateTime: "2021-06-03 14:29:37",
            sort: 1,
            children: []
          }
        ],
        amount_allocation_rules: [
          {
            id: 1240,
            value: "0",
            label: "固定额度",
            createTime: "2021-03-10 16:55:27",
            updateTime: "2021-03-10 16:55:27",
            sort: 1,
            children: []
          },
          {
            id: 1241,
            value: "1",
            label: "按司龄",
            createTime: "2021-03-10 16:55:34",
            updateTime: "2021-03-10 16:55:34",
            sort: 1,
            children: []
          }
        ],
        atms_task_status: [
          {
            id: 713,
            value: "1",
            label: "未完成",
            createTime: "2019-07-03 09:21:07",
            updateTime: "2019-07-03 09:21:07",
            sort: 1,
            children: []
          },
          {
            id: 714,
            value: "2",
            label: "已完成",
            createTime: "2019-07-03 09:21:13",
            updateTime: "2019-07-03 09:21:13",
            sort: 1,
            children: []
          },
          {
            id: 715,
            value: "3",
            label: "已确认",
            createTime: "2019-07-03 09:21:18",
            updateTime: "2019-07-03 09:21:18",
            sort: 1,
            children: []
          }
        ],
        fams_approval_status: [
          {
            id: 1283,
            value: "0",
            label: "待提交",
            createTime: "2021-04-12 14:57:08",
            updateTime: "2021-04-12 14:57:08",
            sort: 1,
            children: []
          },
          {
            id: 1284,
            value: "1",
            label: "待确认",
            createTime: "2021-04-12 14:57:14",
            updateTime: "2021-04-12 14:57:14",
            sort: 1,
            children: []
          },
          {
            id: 1285,
            value: "2",
            label: "已通过",
            createTime: "2021-04-13 11:02:36",
            updateTime: "2021-04-13 11:02:36",
            sort: 1,
            children: []
          },
          {
            id: 1286,
            value: "3",
            label: "未通过",
            createTime: "2021-04-12 14:57:30",
            updateTime: "2021-04-12 14:57:30",
            sort: 1,
            children: []
          }
        ],
        fams_audit_type: [
          {
            id: 1292,
            value: "0",
            label: "待提交",
            createTime: "2021-04-13 09:25:35",
            updateTime: "2021-04-13 09:25:35",
            sort: 1,
            children: []
          },
          {
            id: 1293,
            value: "1",
            label: "部门审核中",
            createTime: "2021-04-13 09:25:43",
            updateTime: "2021-04-13 09:25:43",
            sort: 1,
            children: []
          },
          {
            id: 1294,
            value: "2",
            label: "财务审核中",
            createTime: "2021-04-13 09:25:50",
            updateTime: "2021-04-13 09:25:50",
            sort: 1,
            children: []
          },
          {
            id: 1295,
            value: "3",
            label: "已通过",
            createTime: "2021-04-13 09:25:57",
            updateTime: "2021-04-13 09:25:57",
            sort: 1,
            children: []
          },
          {
            id: 1296,
            value: "5",
            label: "未通过",
            createTime: "2021-04-13 09:26:04",
            updateTime: "2021-04-13 09:26:04",
            sort: 1,
            children: []
          }
        ],
        fams_income_type: [
          {
            id: 153,
            value: "1",
            label: "项目收入",
            createTime: "2019-04-02 04:15:58",
            updateTime: "2019-04-02 04:15:58",
            sort: 1,
            children: [
              {
                id: 162,
                value: "1",
                label: "外部项目收入",
                createTime: "2019-04-02 04:17:47",
                updateTime: "2019-04-02 04:17:47",
                sort: 1
              },
              {
                id: 163,
                value: "2",
                label: "内部项目收入",
                createTime: "2019-04-02 04:17:58",
                updateTime: "2019-04-02 04:17:58",
                sort: 1
              }
            ]
          },
          {
            id: 154,
            value: "2",
            label: "政府补贴",
            createTime: "2019-04-02 04:16:09",
            updateTime: "2019-04-02 04:16:09",
            sort: 1,
            children: [
              {
                id: 164,
                value: "3",
                label: "房租补贴",
                createTime: "2019-05-10 10:15:16",
                updateTime: "2019-05-10 10:15:16",
                sort: 1
              },
              {
                id: 165,
                value: "4",
                label: "社保补贴",
                createTime: "2019-05-10 10:15:28",
                updateTime: "2019-05-10 10:15:28",
                sort: 1
              },
              {
                id: 166,
                value: "5",
                label: "税收补贴",
                createTime: "2019-05-10 10:15:36",
                updateTime: "2019-05-10 10:15:36",
                sort: 1
              }
            ]
          },
          {
            id: 155,
            value: "3",
            label: "对外投资收益",
            createTime: "2019-04-02 04:16:22",
            updateTime: "2019-04-02 04:16:22",
            sort: 1,
            children: [
              {
                id: 167,
                value: "6",
                label: "利息收益",
                createTime: "2019-05-10 10:15:43",
                updateTime: "2019-05-10 10:15:43",
                sort: 1
              },
              {
                id: 168,
                value: "7",
                label: "分红收益",
                createTime: "2019-05-10 10:15:49",
                updateTime: "2019-05-10 10:15:49",
                sort: 1
              },
              {
                id: 169,
                value: "8",
                label: "其他",
                createTime: "2019-05-10 10:16:01",
                updateTime: "2019-05-10 10:16:01",
                sort: 1
              }
            ]
          },
          {
            id: 156,
            value: "4",
            label: "接收外部投资",
            createTime: "2019-04-02 04:16:33",
            updateTime: "2019-04-02 04:16:33",
            sort: 1,
            children: [
              {
                id: 170,
                value: "9",
                label: "个人投资",
                createTime: "2019-05-10 10:16:07",
                updateTime: "2019-05-10 10:16:07",
                sort: 1
              },
              {
                id: 171,
                value: "10",
                label: "企业投资",
                createTime: "2019-05-10 10:16:13",
                updateTime: "2019-05-10 10:16:13",
                sort: 1
              },
              {
                id: 172,
                value: "11",
                label: "天使轮",
                createTime: "2019-05-10 10:16:19",
                updateTime: "2019-05-10 10:16:19",
                sort: 1
              },
              {
                id: 173,
                value: "12",
                label: "pre_A轮",
                createTime: "2019-05-10 10:16:25",
                updateTime: "2019-05-10 10:16:25",
                sort: 1
              },
              {
                id: 174,
                value: "13",
                label: "A轮",
                createTime: "2019-05-10 10:16:31",
                updateTime: "2019-05-10 10:16:31",
                sort: 1
              },
              {
                id: 175,
                value: "14",
                label: "B轮",
                createTime: "2019-05-10 10:16:40",
                updateTime: "2019-05-10 10:16:40",
                sort: 1
              },
              {
                id: 176,
                value: "15",
                label: "C轮",
                createTime: "2019-05-10 10:16:50",
                updateTime: "2019-05-10 10:16:50",
                sort: 1
              },
              {
                id: 177,
                value: "16",
                label: "D轮",
                createTime: "2019-05-10 10:16:57",
                updateTime: "2019-05-10 10:16:57",
                sort: 1
              },
              {
                id: 178,
                value: "17",
                label: "其他",
                createTime: "2019-05-10 10:17:05",
                updateTime: "2019-05-10 10:17:05",
                sort: 1
              }
            ]
          },
          {
            id: 157,
            value: "5",
            label: "财务收入",
            createTime: "2019-04-02 04:16:42",
            updateTime: "2019-04-02 04:16:42",
            sort: 1,
            children: [
              {
                id: 179,
                value: "18",
                label: "利息收入",
                createTime: "2019-05-10 10:17:12",
                updateTime: "2019-05-10 10:17:12",
                sort: 1
              },
              {
                id: 180,
                value: "19",
                label: "理财收入",
                createTime: "2019-05-10 10:17:19",
                updateTime: "2019-05-10 10:17:19",
                sort: 1
              },
              {
                id: 181,
                value: "20",
                label: "开票收入",
                createTime: "2019-05-10 10:17:27",
                updateTime: "2019-05-10 10:17:27",
                sort: 1
              }
            ]
          },
          {
            id: 158,
            value: "6",
            label: "借款收入",
            createTime: "2019-04-02 04:16:52",
            updateTime: "2019-04-02 04:16:52",
            sort: 1,
            children: [
              {
                id: 182,
                value: "21",
                label: "个人借款收入",
                createTime: "2019-05-10 10:17:38",
                updateTime: "2019-05-10 10:17:38",
                sort: 1
              },
              {
                id: 183,
                value: "22",
                label: "部门借款收入",
                createTime: "2019-05-10 10:17:45",
                updateTime: "2019-05-10 10:17:45",
                sort: 1
              },
              {
                id: 184,
                value: "23",
                label: "外部借款收入",
                createTime: "2019-05-10 10:17:50",
                updateTime: "2019-05-10 10:17:50",
                sort: 1
              }
            ]
          },
          {
            id: 159,
            value: "7",
            label: "集团往来结算",
            createTime: "2019-04-02 04:17:04",
            updateTime: "2019-04-02 04:17:04",
            sort: 1,
            children: [
              {
                id: 185,
                value: "24",
                label: "集团往来结算",
                createTime: "2019-05-10 10:17:59",
                updateTime: "2019-05-10 10:17:59",
                sort: 1
              }
            ]
          },
          {
            id: 160,
            value: "8",
            label: "质押返还",
            createTime: "2019-04-02 04:34:01",
            updateTime: "2019-04-02 04:34:01",
            sort: 1,
            children: [
              {
                id: 186,
                value: "25",
                label: "房租押金",
                createTime: "2019-05-10 10:18:12",
                updateTime: "2019-05-10 10:18:12",
                sort: 1
              },
              {
                id: 187,
                value: "26",
                label: "投标保证金",
                createTime: "2019-05-10 10:18:20",
                updateTime: "2019-05-10 10:18:20",
                sort: 1
              },
              {
                id: 188,
                value: "27",
                label: "履约保证金",
                createTime: "2019-05-10 10:18:27",
                updateTime: "2019-05-10 10:18:27",
                sort: 1
              },
              {
                id: 189,
                value: "28",
                label: "其他",
                createTime: "2019-05-10 10:18:37",
                updateTime: "2019-05-10 10:18:37",
                sort: 1
              },
              {
                id: 684,
                value: "34",
                label: "暂借款",
                createTime: "2019-06-19 08:55:38",
                updateTime: "2019-06-19 08:55:38",
                sort: 1
              }
            ]
          },
          {
            id: 161,
            value: "9",
            label: "集团奖励",
            createTime: "2019-04-02 04:17:33",
            updateTime: "2019-04-02 04:17:33",
            sort: 1,
            children: [
              {
                id: 190,
                value: "29",
                label: "项目奖励",
                createTime: "2019-05-10 10:18:46",
                updateTime: "2019-05-10 10:18:46",
                sort: 1
              },
              {
                id: 191,
                value: "30",
                label: "组织奖励",
                createTime: "2019-05-10 10:18:53",
                updateTime: "2019-05-10 10:18:53",
                sort: 1
              },
              {
                id: 192,
                value: "31",
                label: "其他",
                createTime: "2019-05-10 10:18:58",
                updateTime: "2019-05-10 10:18:58",
                sort: 1
              }
            ]
          },
          {
            id: 193,
            value: "10",
            label: "其他收入",
            createTime: "2019-04-02 04:35:09",
            updateTime: "2019-04-02 04:35:09",
            sort: 1,
            children: [
              {
                id: 194,
                value: "32",
                label: "其他收入",
                createTime: "2019-05-10 10:19:04",
                updateTime: "2019-05-10 10:19:04",
                sort: 1
              }
            ]
          },
          {
            id: 690,
            value: "35",
            label: "现金转入",
            createTime: "2019-06-20 09:55:55",
            updateTime: "2019-06-20 09:55:55",
            sort: 1,
            children: [
              {
                id: 691,
                value: "36",
                label: "现金转入",
                createTime: "2019-06-20 09:56:08",
                updateTime: "2019-06-20 09:56:08",
                sort: 1
              }
            ]
          },
          {
            id: 706,
            value: "37",
            label: "固定资产收入",
            createTime: "2019-07-01 15:07:09",
            updateTime: "2019-07-01 15:07:09",
            sort: 1,
            children: [
              {
                id: 707,
                value: "38",
                label: "固定资产收入",
                createTime: "2019-07-01 15:11:19",
                updateTime: "2019-07-01 15:11:19",
                sort: 1
              }
            ]
          }
        ],
        exam_validity_period: [
          {
            id: 1219,
            value: "1",
            label: "1年",
            createTime: "2021-03-04 09:08:40",
            updateTime: "2021-03-04 09:08:40",
            sort: 1,
            children: []
          },
          {
            id: 1220,
            value: "2",
            label: "2年",
            createTime: "2021-03-04 09:08:50",
            updateTime: "2021-03-04 09:08:50",
            sort: 2,
            children: []
          },
          {
            id: 1221,
            value: "3",
            label: "3年",
            createTime: "2021-03-04 09:08:59",
            updateTime: "2021-03-04 09:08:59",
            sort: 3,
            children: []
          },
          {
            id: 1222,
            value: "3",
            label: "长期",
            createTime: "2021-03-04 09:09:15",
            updateTime: "2021-03-04 09:09:15",
            sort: 4,
            children: []
          }
        ],
        payment_type: [
          {
            id: 1258,
            value: "1",
            label: "银行转账",
            createTime: "2021-03-25 15:02:53",
            updateTime: "2021-03-25 15:02:53",
            sort: 1,
            children: []
          },
          {
            id: 1259,
            value: "2",
            label: "现金",
            createTime: "2021-03-25 15:02:58",
            updateTime: "2021-03-25 15:02:58",
            sort: 1,
            children: []
          }
        ],
        crms_district_type: [
          {
            id: 74,
            value: "0",
            label: "部委",
            createTime: "2019-04-13 05:39:41",
            updateTime: "2019-04-13 05:39:41",
            sort: 1,
            children: []
          },
          {
            id: 75,
            value: "1",
            label: "省级",
            createTime: "2019-04-13 05:39:51",
            updateTime: "2019-04-13 05:39:51",
            sort: 1,
            children: []
          },
          {
            id: 76,
            value: "2",
            label: "市级",
            createTime: "2019-04-13 05:40:00",
            updateTime: "2019-04-13 05:40:00",
            sort: 1,
            children: []
          },
          {
            id: 371,
            value: "3",
            label: "区级",
            createTime: "2019-04-13 05:40:09",
            updateTime: "2019-04-13 05:40:09",
            sort: 1,
            children: []
          },
          {
            id: 372,
            value: "4",
            label: "园区",
            createTime: "2019-04-13 05:40:17",
            updateTime: "2019-04-13 05:40:17",
            sort: 1,
            children: []
          },
          {
            id: 373,
            value: "5",
            label: "企业",
            createTime: "2019-04-13 05:40:25",
            updateTime: "2019-04-13 05:40:25",
            sort: 1,
            children: []
          },
          {
            id: 374,
            value: "6",
            label: "其他",
            createTime: "2019-04-13 05:40:31",
            updateTime: "2019-04-13 05:40:31",
            sort: 1,
            children: []
          }
        ],
        hrms_training_type: [
          {
            id: 44,
            value: "1",
            label: "业务类",
            createTime: "2019-03-15 09:53:42",
            updateTime: "2019-03-15 09:53:42",
            sort: 1,
            children: []
          },
          {
            id: 45,
            value: "2",
            label: "技能类",
            createTime: "2019-03-15 09:53:47",
            updateTime: "2019-03-15 09:53:47",
            sort: 1,
            children: []
          },
          {
            id: 46,
            value: "3",
            label: "文化类",
            createTime: "2019-03-15 09:53:57",
            updateTime: "2019-03-15 09:53:57",
            sort: 1,
            children: []
          },
          {
            id: 47,
            value: "4",
            label: "品牌类",
            createTime: "2019-03-15 09:54:06",
            updateTime: "2019-03-15 09:54:06",
            sort: 1,
            children: []
          },
          {
            id: 48,
            value: "5",
            label: "平台类",
            createTime: "2019-03-15 09:54:19",
            updateTime: "2019-03-15 09:54:19",
            sort: 1,
            children: []
          },
          {
            id: 49,
            value: "6",
            label: "市场类",
            createTime: "2019-03-15 09:54:33",
            updateTime: "2019-03-15 09:54:33",
            sort: 1,
            children: []
          },
          {
            id: 50,
            value: "7",
            label: "项目类",
            createTime: "2019-03-15 09:54:45",
            updateTime: "2019-03-15 09:54:45",
            sort: 1,
            children: []
          },
          {
            id: 51,
            value: "8",
            label: "制度类",
            createTime: "2019-03-15 09:55:00",
            updateTime: "2019-03-15 09:55:00",
            sort: 1,
            children: []
          },
          {
            id: 52,
            value: "9",
            label: "其他",
            createTime: "2019-03-15 09:55:14",
            updateTime: "2019-03-15 09:55:14",
            sort: 1,
            children: []
          }
        ],
        SOCIAL_TYPE: [
          {
            id: 744,
            value: "WX",
            label: "微信",
            createTime: "2019-07-05 15:41:25",
            updateTime: "2019-07-05 15:41:25",
            sort: 0,
            children: []
          },
          {
            id: 745,
            value: "QQ",
            label: "QQ",
            createTime: "2019-07-05 15:41:25",
            updateTime: "2019-07-05 15:41:25",
            sort: 0,
            children: []
          },
          {
            id: 746,
            value: "1",
            label: "通知",
            createTime: "2019-07-05 15:42:43",
            updateTime: "2019-07-05 15:42:43",
            sort: 1,
            children: []
          },
          {
            id: 747,
            value: "2",
            label: "公告",
            createTime: "2019-07-05 15:42:43",
            updateTime: "2019-07-05 15:42:43",
            sort: 2,
            children: []
          },
          {
            id: 748,
            value: "3",
            label: "报告",
            createTime: "2019-07-05 15:42:43",
            updateTime: "2019-07-05 15:42:43",
            sort: 3,
            children: []
          }
        ],
        crms_follow_up_status: [
          {
            id: 94,
            value: "0",
            label: "已合作",
            createTime: "2019-04-26 09:05:11",
            updateTime: "2019-04-26 09:05:11",
            sort: 1,
            children: []
          },
          {
            id: 96,
            value: "2",
            label: "已确定合作意向",
            createTime: "2019-04-26 09:05:22",
            updateTime: "2019-04-26 09:05:22",
            sort: 2,
            children: []
          },
          {
            id: 452,
            value: "3",
            label: "正在引导客户合作",
            createTime: "2019-04-26 09:05:31",
            updateTime: "2019-04-26 09:05:31",
            sort: 3,
            children: []
          },
          {
            id: 95,
            value: "1",
            label: "暂无需求",
            createTime: "2019-04-26 09:05:38",
            updateTime: "2019-04-26 09:05:38",
            sort: 4,
            children: []
          }
        ],
        cpms_technology_type: [
          {
            id: 503,
            value: "1",
            label: "大数据",
            createTime: "2019-04-26 21:26:37",
            updateTime: "2019-04-26 21:26:37",
            sort: 1,
            children: []
          },
          {
            id: 504,
            value: "2",
            label: "分布式",
            createTime: "2019-04-26 21:26:47",
            updateTime: "2019-04-26 21:26:47",
            sort: 1,
            children: []
          },
          {
            id: 505,
            value: "3",
            label: "人工智能",
            createTime: "2019-04-26 21:26:56",
            updateTime: "2019-04-26 21:26:56",
            sort: 1,
            children: []
          },
          {
            id: 506,
            value: "4",
            label: "知识图谱",
            createTime: "2019-04-26 21:27:04",
            updateTime: "2019-04-26 21:27:04",
            sort: 1,
            children: []
          },
          {
            id: 507,
            value: "5",
            label: "用户画像",
            createTime: "2019-04-26 21:27:13",
            updateTime: "2019-04-26 21:27:13",
            sort: 1,
            children: []
          },
          {
            id: 508,
            value: "6",
            label: "区块链",
            createTime: "2019-04-26 21:27:25",
            updateTime: "2019-04-26 21:27:25",
            sort: 1,
            children: []
          }
        ],
        trial_period: [
          {
            id: 1275,
            value: "1",
            label: "一个月",
            createTime: "2021-04-07 17:01:33",
            updateTime: "2021-04-07 17:01:33",
            sort: 1,
            children: []
          },
          {
            id: 1276,
            value: "3",
            label: "三个月",
            createTime: "2021-04-07 17:01:38",
            updateTime: "2021-04-07 17:01:38",
            sort: 1,
            children: []
          }
        ],
        hrms_labor_contract_type: [
          {
            id: 419,
            value: "1",
            label: "劳动合同",
            createTime: "2019-04-20 23:26:25",
            updateTime: "2019-04-20 23:26:25",
            sort: 1,
            children: []
          },
          {
            id: 420,
            value: "2",
            label: "实习合同",
            createTime: "2019-04-20 23:26:35",
            updateTime: "2019-04-20 23:26:35",
            sort: 1,
            children: []
          },
          {
            id: 421,
            value: "3",
            label: "见习合同",
            createTime: "2019-04-20 23:26:43",
            updateTime: "2019-04-20 23:26:43",
            sort: 1,
            children: []
          }
        ],
        crms_client_intention_level: [
          {
            id: 116,
            value: "2",
            label: "高",
            createTime: "2019-03-20 22:36:12",
            updateTime: "2019-03-20 22:36:12",
            sort: 1,
            children: []
          },
          {
            id: 117,
            value: "1",
            label: "中",
            createTime: "2019-03-20 22:33:21",
            updateTime: "2019-03-20 22:33:21",
            sort: 1,
            children: []
          },
          {
            id: 118,
            value: "0",
            label: "低",
            createTime: "2019-03-20 22:36:14",
            updateTime: "2019-03-20 22:36:14",
            sort: 1,
            children: []
          }
        ],
        crms_client_type: [
          {
            id: 93,
            value: "1",
            label: "客户",
            createTime: "2019-05-31 10:07:30",
            updateTime: "2019-05-31 10:07:30",
            sort: 0,
            children: []
          },
          {
            id: 92,
            value: "0",
            label: "合作伙伴",
            createTime: "2019-05-31 10:07:28",
            updateTime: "2019-05-31 10:07:28",
            sort: 1,
            children: []
          }
        ],
        invoice_status: [
          {
            id: 1262,
            value: "0",
            label: "待报销",
            createTime: "2021-04-12 10:27:35",
            updateTime: "2021-04-12 10:27:35",
            sort: 1,
            children: []
          },
          {
            id: 1263,
            value: "1",
            label: "已报销",
            createTime: "2021-04-12 10:27:40",
            updateTime: "2021-04-12 10:27:40",
            sort: 1,
            children: []
          },
          {
            id: 1264,
            value: "2",
            label: "报销中",
            createTime: "2021-04-12 10:27:46",
            updateTime: "2021-04-12 10:27:46",
            sort: 1,
            children: []
          }
        ],
        hrms_birth_status: [
          {
            id: 42,
            value: "1",
            label: "未育",
            createTime: "2019-03-15 03:02:22",
            updateTime: "2019-03-15 03:02:22",
            sort: 1,
            children: []
          },
          {
            id: 43,
            value: "2",
            label: "已育",
            createTime: "2019-04-30 18:53:40",
            updateTime: "2019-04-30 18:53:40",
            sort: 1,
            children: []
          }
        ],
        job_type: [
          {
            id: 724,
            value: "1",
            label: "java类",
            createTime: "2019-07-09 14:44:09",
            updateTime: "2019-07-09 14:44:09",
            sort: 1,
            children: []
          },
          {
            id: 725,
            value: "2",
            label: "spring bean容器实例",
            createTime: "2019-07-09 14:44:09",
            updateTime: "2019-07-09 14:44:09",
            sort: 1,
            children: []
          },
          {
            id: 726,
            value: "3",
            label: "其他类型",
            createTime: "2019-07-09 14:44:09",
            updateTime: "2019-07-09 14:44:09",
            sort: 1,
            children: []
          },
          {
            id: 727,
            value: "4",
            label: "Rest 调用",
            createTime: "2019-07-09 14:44:09",
            updateTime: "2019-07-09 14:44:09",
            sort: 1,
            children: []
          },
          {
            id: 728,
            value: "5",
            label: "jar类型",
            createTime: "2019-07-09 14:44:09",
            updateTime: "2019-07-09 14:44:09",
            sort: 1,
            children: []
          }
        ],
        reimbursement_type: [
          {
            id: 1251,
            value: "1",
            label: "差旅费用报销",
            createTime: "2021-03-25 14:42:52",
            updateTime: "2021-03-25 14:42:52",
            sort: 1,
            children: []
          },
          {
            id: 1252,
            value: "2",
            label: "业务招待报销",
            createTime: "2021-03-25 14:42:58",
            updateTime: "2021-03-25 14:42:58",
            sort: 1,
            children: []
          },
          {
            id: 1253,
            value: "3",
            label: "日常费用报销",
            createTime: "2021-03-25 14:43:05",
            updateTime: "2021-03-25 14:43:05",
            sort: 1,
            children: []
          },
          {
            id: 1254,
            value: "4",
            label: "其他费用报销",
            createTime: "2021-03-25 14:43:11",
            updateTime: "2021-03-25 14:43:11",
            sort: 1,
            children: []
          }
        ],
        fams_tax_subject: [
          {
            id: 581,
            value: "1",
            label: "鉴证咨询服务",
            createTime: "2019-05-15 11:46:00",
            updateTime: "2019-05-15 11:46:00",
            sort: 1,
            children: []
          },
          {
            id: 582,
            value: "2",
            label: "信息技术服务",
            createTime: "2019-05-15 11:46:11",
            updateTime: "2019-05-15 11:46:11",
            sort: 1,
            children: []
          },
          {
            id: 583,
            value: "3",
            label: "研发和技术服务",
            createTime: "2019-05-15 11:46:29",
            updateTime: "2019-05-15 11:46:29",
            sort: 1,
            children: []
          },
          {
            id: 584,
            value: "4",
            label: "会展服务",
            createTime: "2019-05-15 11:46:41",
            updateTime: "2019-05-15 11:46:41",
            sort: 1,
            children: []
          },
          {
            id: 585,
            value: "5",
            label: "软件",
            createTime: "2019-05-15 11:46:53",
            updateTime: "2019-05-15 11:46:53",
            sort: 1,
            children: []
          },
          {
            id: 701,
            value: "6",
            label: "其他咨询服务",
            createTime: "2019-06-26 15:05:44",
            updateTime: "2019-06-26 15:05:44",
            sort: 1,
            children: []
          },
          {
            id: 717,
            value: "7",
            label: "非学历教育服务",
            createTime: "2019-07-05 16:57:15",
            updateTime: "2019-07-05 16:57:15",
            sort: 1,
            children: []
          },
          {
            id: 718,
            value: "8",
            label: "设计服务",
            createTime: "2019-07-05 16:57:38",
            updateTime: "2019-07-05 16:57:38",
            sort: 1,
            children: []
          }
        ],
        misfire_policy: [
          {
            id: 734,
            value: "1",
            label: "错失周期立即执行",
            createTime: "2019-07-09 14:44:09",
            updateTime: "2019-07-09 14:44:09",
            sort: 1,
            children: []
          },
          {
            id: 735,
            value: "2",
            label: "错失周期执行一次",
            createTime: "2019-07-09 14:44:09",
            updateTime: "2019-07-09 14:44:09",
            sort: 1,
            children: []
          },
          {
            id: 736,
            value: "3",
            label: "下周期执行",
            createTime: "2019-07-09 14:44:09",
            updateTime: "2019-07-09 14:44:09",
            sort: 1,
            children: []
          }
        ],
        write_off_status: [
          {
            id: 1287,
            value: "0",
            label: "未核销",
            createTime: "2021-04-12 17:07:38",
            updateTime: "2021-04-12 17:07:38",
            sort: 1,
            children: []
          },
          {
            id: 1288,
            value: "1",
            label: "发票核销",
            createTime: "2021-04-12 17:07:48",
            updateTime: "2021-04-12 17:07:48",
            sort: 1,
            children: []
          },
          {
            id: 1289,
            value: "2",
            label: "上传银行回单",
            createTime: "2021-04-12 17:07:54",
            updateTime: "2021-04-12 17:07:54",
            sort: 1,
            children: []
          }
        ],
        hrms_kpi_status: [],
        fams_billing_rate: [
          {
            id: 570,
            value: "1",
            label: "0",
            createTime: "2019-05-09 15:51:38",
            updateTime: "2019-05-09 15:51:38",
            sort: 1,
            children: []
          },
          {
            id: 571,
            value: "2",
            label: "3",
            createTime: "2019-05-09 15:51:42",
            updateTime: "2019-05-09 15:51:42",
            sort: 1,
            children: []
          },
          {
            id: 572,
            value: "3",
            label: "6",
            createTime: "2019-05-09 15:51:50",
            updateTime: "2019-05-09 15:51:50",
            sort: 1,
            children: []
          }
        ],
        FAMS_I_CAN_BEI_RULE: [
          {
            id: 1152,
            value: "2",
            label: "创建组织奖励",
            createTime: "2019-09-30 16:54:25",
            updateTime: "2019-09-30 16:54:25",
            sort: 1,
            children: []
          },
          {
            id: 1153,
            value: "3",
            label: "完善组织详情奖励",
            createTime: "2019-09-30 16:54:28",
            updateTime: "2019-09-30 16:54:28",
            sort: 1,
            children: []
          },
          {
            id: 1154,
            value: "4",
            label: "拓展组织成员奖励",
            createTime: "2019-09-30 16:54:31",
            updateTime: "2019-09-30 16:54:31",
            sort: 1,
            children: []
          },
          {
            id: 1155,
            value: "5",
            label: "分配成员角色奖励",
            createTime: "2019-09-30 16:54:35",
            updateTime: "2019-09-30 16:54:35",
            sort: 1,
            children: []
          },
          {
            id: 1156,
            value: "6",
            label: "设立部门奖励",
            createTime: "2019-09-30 16:54:39",
            updateTime: "2019-09-30 16:54:39",
            sort: 1,
            children: []
          },
          {
            id: 1173,
            value: "7",
            label: "个人信息完善奖励",
            createTime: "2019-10-31 20:53:30",
            updateTime: "2019-10-31 20:53:30",
            sort: 1,
            children: []
          },
          {
            id: 1174,
            value: "8",
            label: "邀请用户入驻奖励",
            createTime: "2019-10-31 20:53:58",
            updateTime: "2019-10-31 20:53:58",
            sort: 1,
            children: []
          },
          {
            id: 1175,
            value: "9",
            label: "上传生态开放的材料",
            createTime: "2019-10-31 20:59:58",
            updateTime: "2019-10-31 20:59:58",
            sort: 1,
            children: []
          },
          {
            id: 1176,
            value: "10",
            label: "评论",
            createTime: "2019-10-31 21:00:09",
            updateTime: "2019-10-31 21:00:09",
            sort: 1,
            children: []
          },
          {
            id: 1177,
            value: "11",
            label: "商机发布",
            createTime: "2019-10-31 21:00:21",
            updateTime: "2019-10-31 21:00:21",
            sort: 1,
            children: []
          },
          {
            id: 1178,
            value: "12",
            label: "发布生态开放的说说",
            createTime: "2019-10-31 21:00:32",
            updateTime: "2019-10-31 21:00:32",
            sort: 1,
            children: []
          }
        ],
        pgbd_agency_level: [
          {
            id: 984,
            value: "国家级",
            label: "国家级",
            createTime: "2019-08-06 14:42:04",
            updateTime: "2019-08-06 14:42:04",
            sort: 1,
            children: []
          },
          {
            id: 985,
            value: "省级",
            label: "省级",
            createTime: "2019-08-06 14:42:15",
            updateTime: "2019-08-06 14:42:15",
            sort: 1,
            children: []
          },
          {
            id: 986,
            value: "市级",
            label: "市级",
            createTime: "2019-08-06 14:42:24",
            updateTime: "2019-08-06 14:42:24",
            sort: 1,
            children: []
          },
          {
            id: 987,
            value: "区县级",
            label: "区县级",
            createTime: "2019-08-06 14:42:35",
            updateTime: "2019-08-06 14:42:35",
            sort: 1,
            children: []
          }
        ],
        hrms_wages_salaries: [
          {
            id: 517,
            value: "1",
            label: "面议",
            createTime: "2019-04-26 22:21:18",
            updateTime: "2019-04-26 22:21:18",
            sort: 1,
            children: []
          },
          {
            id: 518,
            value: "2",
            label: "1000-1500",
            createTime: "2019-04-26 22:21:33",
            updateTime: "2019-04-26 22:21:33",
            sort: 1,
            children: []
          },
          {
            id: 519,
            value: "3",
            label: "1500-2000",
            createTime: "2019-04-26 22:21:44",
            updateTime: "2019-04-26 22:21:44",
            sort: 1,
            children: []
          },
          {
            id: 520,
            value: "4",
            label: "2000-2500",
            createTime: "2019-04-26 22:21:53",
            updateTime: "2019-04-26 22:21:53",
            sort: 1,
            children: []
          },
          {
            id: 521,
            value: "5",
            label: "2500-3000",
            createTime: "2019-04-26 22:22:03",
            updateTime: "2019-04-26 22:22:03",
            sort: 1,
            children: []
          },
          {
            id: 522,
            value: "6",
            label: "3000-4500",
            createTime: "2019-04-26 22:22:12",
            updateTime: "2019-04-26 22:22:12",
            sort: 1,
            children: []
          },
          {
            id: 523,
            value: "7",
            label: "4500-6000",
            createTime: "2019-04-26 22:22:26",
            updateTime: "2019-04-26 22:22:26",
            sort: 1,
            children: []
          },
          {
            id: 524,
            value: "8",
            label: "6000-8000",
            createTime: "2019-04-26 22:22:38",
            updateTime: "2019-04-26 22:22:38",
            sort: 1,
            children: []
          },
          {
            id: 525,
            value: "9",
            label: "8000-10000",
            createTime: "2019-04-26 22:22:47",
            updateTime: "2019-04-26 22:22:47",
            sort: 1,
            children: []
          },
          {
            id: 526,
            value: "10",
            label: "10000以上",
            createTime: "2019-04-26 22:23:49",
            updateTime: "2019-04-26 22:23:49",
            sort: 1,
            children: []
          }
        ],
        fams_reduce_reason: [
          {
            id: 619,
            value: "1",
            label: "违规违纪",
            createTime: "2019-05-23 14:57:21",
            updateTime: "2019-05-23 14:57:21",
            sort: 1,
            children: []
          },
          {
            id: 620,
            value: "2",
            label: "连带责任",
            createTime: "2019-05-23 14:57:32",
            updateTime: "2019-05-23 14:57:32",
            sort: 1,
            children: []
          },
          {
            id: 663,
            value: "3",
            label: "其他",
            createTime: "2019-05-31 16:19:29",
            updateTime: "2019-05-31 16:19:29",
            sort: 1,
            children: []
          }
        ],
        hrms_working_life: [
          {
            id: 509,
            value: "1",
            label: "在读学生",
            createTime: "2019-04-26 22:16:55",
            updateTime: "2019-04-26 22:16:55",
            sort: 1,
            children: []
          },
          {
            id: 510,
            value: "2",
            label: "应届毕业生",
            createTime: "2019-04-26 22:17:34",
            updateTime: "2019-04-26 22:17:34",
            sort: 1,
            children: []
          },
          {
            id: 511,
            value: "3",
            label: "一年以上",
            createTime: "2019-04-26 22:17:45",
            updateTime: "2019-04-26 22:17:45",
            sort: 1,
            children: []
          },
          {
            id: 512,
            value: "4",
            label: "二年以上",
            createTime: "2019-04-26 22:17:54",
            updateTime: "2019-04-26 22:17:54",
            sort: 1,
            children: []
          },
          {
            id: 513,
            value: "5",
            label: "三年以上",
            createTime: "2019-04-26 22:18:06",
            updateTime: "2019-04-26 22:18:06",
            sort: 1,
            children: []
          },
          {
            id: 514,
            value: "6",
            label: "五年以上",
            createTime: "2019-04-26 22:18:20",
            updateTime: "2019-04-26 22:18:20",
            sort: 1,
            children: []
          },
          {
            id: 515,
            value: "7",
            label: "八年以上",
            createTime: "2019-04-26 22:18:49",
            updateTime: "2019-04-26 22:18:49",
            sort: 1,
            children: []
          },
          {
            id: 516,
            value: "8",
            label: "十年以上",
            createTime: "2019-04-26 22:19:04",
            updateTime: "2019-04-26 22:19:04",
            sort: 1,
            children: []
          }
        ],
        job_execute_status: [
          {
            id: 732,
            value: "1",
            label: "正常",
            createTime: "2019-07-09 14:44:09",
            updateTime: "2019-07-09 14:44:09",
            sort: 1,
            children: []
          },
          {
            id: 733,
            value: "2",
            label: "异常",
            createTime: "2019-07-09 14:44:09",
            updateTime: "2019-07-09 14:44:09",
            sort: 1,
            children: []
          }
        ],
        测试JEST1: [],
        POLICY_INDUSTRY: [
          {
            id: 866,
            value: "1",
            label: "农业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 1,
            children: []
          },
          {
            id: 867,
            value: "2",
            label: "林业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 2,
            children: []
          },
          {
            id: 868,
            value: "3",
            label: "牧业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 3,
            children: []
          },
          {
            id: 869,
            value: "4",
            label: "渔业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 4,
            children: []
          },
          {
            id: 870,
            value: "5",
            label: "采矿业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 5,
            children: []
          },
          {
            id: 871,
            value: "6",
            label: "制造业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 6,
            children: []
          },
          {
            id: 872,
            value: "7",
            label: "电力、热力、燃气及水生产和供应业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 7,
            children: []
          },
          {
            id: 873,
            value: "8",
            label: "建筑业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 8,
            children: []
          },
          {
            id: 874,
            value: "9",
            label: "批发业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 9,
            children: []
          },
          {
            id: 875,
            value: "a",
            label: "零售业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 10,
            children: []
          },
          {
            id: 876,
            value: "b",
            label: "交通运输业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 11,
            children: []
          },
          {
            id: 877,
            value: "c",
            label: "仓储业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 12,
            children: []
          },
          {
            id: 878,
            value: "d",
            label: "邮政业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 13,
            children: []
          },
          {
            id: 879,
            value: "e",
            label: "住宿业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 14,
            children: []
          },
          {
            id: 880,
            value: "f",
            label: "餐饮业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 15,
            children: []
          },
          {
            id: 881,
            value: "g",
            label: "信息传输业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 16,
            children: []
          },
          {
            id: 882,
            value: "h",
            label: "软件和信息技术服务业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 17,
            children: []
          },
          {
            id: 883,
            value: "i",
            label: "金融业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 18,
            children: []
          },
          {
            id: 884,
            value: "j",
            label: "房地产业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 19,
            children: []
          },
          {
            id: 885,
            value: "k",
            label: "租赁和商务服务业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 20,
            children: []
          },
          {
            id: 886,
            value: "l",
            label: "科学研究和技术服务业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 21,
            children: []
          },
          {
            id: 887,
            value: "m",
            label: "水利、环境和公共设施管理业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 22,
            children: []
          },
          {
            id: 888,
            value: "n",
            label: "居民服务、休息和其他服务业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 23,
            children: []
          },
          {
            id: 889,
            value: "o",
            label: "教育",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 24,
            children: []
          },
          {
            id: 890,
            value: "p",
            label: "卫生和社会工作",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 25,
            children: []
          },
          {
            id: 891,
            value: "q",
            label: "文化、体育和娱乐业",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 26,
            children: []
          },
          {
            id: 892,
            value: "r",
            label: "公共管理、社会保障和社会组织",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 27,
            children: []
          },
          {
            id: 893,
            value: "s",
            label: "国际组织",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 28,
            children: []
          },
          {
            id: 894,
            value: "t",
            label: "其他",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 29,
            children: []
          },
          {
            id: 895,
            value: "u",
            label: "不限",
            createTime: "2019-07-05 16:02:47",
            updateTime: "2019-07-05 16:02:47",
            sort: 30,
            children: []
          }
        ],
        mlms_meeting_type: [
          {
            id: 102,
            value: "5",
            label: "日常例会",
            createTime: "2019-04-26 09:09:46",
            updateTime: "2019-04-26 09:09:46",
            sort: 1,
            children: []
          },
          {
            id: 97,
            value: "0",
            label: "管理会议",
            createTime: "2019-04-26 09:10:48",
            updateTime: "2019-04-26 09:10:48",
            sort: 2,
            children: []
          },
          {
            id: 98,
            value: "1",
            label: "市场会议",
            createTime: "2019-04-26 09:10:54",
            updateTime: "2019-04-26 09:10:54",
            sort: 3,
            children: []
          },
          {
            id: 99,
            value: "2",
            label: "项目会议",
            createTime: "2019-04-26 09:11:01",
            updateTime: "2019-04-26 09:11:01",
            sort: 4,
            children: []
          },
          {
            id: 100,
            value: "3",
            label: "产品会议",
            createTime: "2019-04-16 04:51:30",
            updateTime: "2019-04-16 04:51:30",
            sort: 5,
            children: []
          },
          {
            id: 103,
            value: "6",
            label: "拜访会议",
            createTime: "2019-05-08 15:10:22",
            updateTime: "2019-05-08 15:10:22",
            sort: 6,
            children: []
          },
          {
            id: 101,
            value: "4",
            label: "培训会议",
            createTime: "2019-04-26 09:11:37",
            updateTime: "2019-04-26 09:11:37",
            sort: 7,
            children: []
          },
          {
            id: 104,
            value: "7",
            label: "其他",
            createTime: "2019-04-26 09:11:44",
            updateTime: "2019-04-26 09:11:44",
            sort: 8,
            children: []
          }
        ],
        POLICY_LEVEL: [
          {
            id: 753,
            value: "1",
            label: "国家级",
            createTime: "2019-07-05 15:44:20",
            updateTime: "2019-07-05 15:44:20",
            sort: 1,
            children: []
          },
          {
            id: 754,
            value: "2",
            label: "省级",
            createTime: "2019-07-05 15:44:20",
            updateTime: "2019-07-05 15:44:20",
            sort: 2,
            children: []
          },
          {
            id: 755,
            value: "3",
            label: "市级",
            createTime: "2019-07-05 15:44:20",
            updateTime: "2019-07-05 15:44:20",
            sort: 3,
            children: []
          },
          {
            id: 756,
            value: "4",
            label: "区级（县级）",
            createTime: "2019-07-05 15:44:20",
            updateTime: "2019-07-05 15:44:20",
            sort: 4,
            children: []
          }
        ],
        meetingmarketing: [
          {
            id: 1026,
            value: "1",
            label: "科技网络",
            createTime: "2019-09-19 17:42:08",
            updateTime: "2019-09-19 17:42:08",
            sort: 1,
            children: [
              {
                id: 1036,
                value: "1",
                label: "IT科技",
                createTime: "2019-09-29 16:10:38",
                updateTime: "2019-09-29 16:10:38",
                sort: 1
              },
              {
                id: 1037,
                value: "2",
                label: "大数据",
                createTime: "2019-09-29 16:10:38",
                updateTime: "2019-09-29 16:10:38",
                sort: 1
              },
              {
                id: 1038,
                value: "1",
                label: "物联网",
                createTime: "2019-09-29 16:10:38",
                updateTime: "2019-09-29 16:10:38",
                sort: 1
              },
              {
                id: 1039,
                value: "1",
                label: "云计算",
                createTime: "2019-09-29 16:10:38",
                updateTime: "2019-09-29 16:10:38",
                sort: 1
              },
              {
                id: 1040,
                value: "1",
                label: "移动互联网",
                createTime: "2019-09-29 16:10:38",
                updateTime: "2019-09-29 16:10:38",
                sort: 1
              },
              {
                id: 1041,
                value: "1",
                label: "智慧城市",
                createTime: "2019-09-29 16:10:38",
                updateTime: "2019-09-29 16:10:38",
                sort: 1
              },
              {
                id: 1042,
                value: "1",
                label: "软硬件",
                createTime: "2019-09-29 16:10:38",
                updateTime: "2019-09-29 16:10:38",
                sort: 1
              },
              {
                id: 1043,
                value: "1",
                label: "智能装备",
                createTime: "2019-09-29 16:10:38",
                updateTime: "2019-09-29 16:10:38",
                sort: 1
              },
              {
                id: 1044,
                value: "1",
                label: "移动开发",
                createTime: "2019-09-29 16:10:38",
                updateTime: "2019-09-29 16:10:38",
                sort: 1
              },
              {
                id: 1045,
                value: "1",
                label: "创业创新",
                createTime: "2019-09-29 16:10:38",
                updateTime: "2019-09-29 16:10:38",
                sort: 1
              },
              {
                id: 1046,
                value: "1",
                label: "电子商务",
                createTime: "2019-09-29 16:10:38",
                updateTime: "2019-09-29 16:10:38",
                sort: 1
              },
              {
                id: 1047,
                value: "1",
                label: "互联网",
                createTime: "2019-09-29 16:10:38",
                updateTime: "2019-09-29 16:10:38",
                sort: 1
              },
              {
                id: 1048,
                value: "1",
                label: "信息安全",
                createTime: "2019-09-29 16:10:38",
                updateTime: "2019-09-29 16:10:38",
                sort: 1
              },
              {
                id: 1049,
                value: "1",
                label: "游戏",
                createTime: "2019-09-29 16:10:38",
                updateTime: "2019-09-29 16:10:38",
                sort: 1
              },
              {
                id: 1050,
                value: "1",
                label: "通讯",
                createTime: "2019-09-29 16:10:38",
                updateTime: "2019-09-29 16:10:38",
                sort: 1
              },
              {
                id: 1051,
                value: "1",
                label: "O2O",
                createTime: "2019-09-29 16:10:38",
                updateTime: "2019-09-29 16:10:38",
                sort: 1
              }
            ]
          },
          {
            id: 1027,
            value: "2",
            label: "财经金融",
            createTime: "2019-09-19 17:42:42",
            updateTime: "2019-09-19 17:42:42",
            sort: 1,
            children: [
              {
                id: 1052,
                value: "1",
                label: "互联网金融",
                createTime: "2019-09-29 16:10:50",
                updateTime: "2019-09-29 16:10:50",
                sort: 1
              },
              {
                id: 1053,
                value: "1",
                label: "金融创新",
                createTime: "2019-09-29 16:10:50",
                updateTime: "2019-09-29 16:10:50",
                sort: 1
              },
              {
                id: 1054,
                value: "1",
                label: "理财",
                createTime: "2019-09-29 16:10:50",
                updateTime: "2019-09-29 16:10:50",
                sort: 1
              },
              {
                id: 1055,
                value: "1",
                label: "证券保险",
                createTime: "2019-09-29 16:10:50",
                updateTime: "2019-09-29 16:10:50",
                sort: 1
              },
              {
                id: 1056,
                value: "1",
                label: "信贷租赁",
                createTime: "2019-09-29 16:10:50",
                updateTime: "2019-09-29 16:10:50",
                sort: 1
              },
              {
                id: 1057,
                value: "1",
                label: "资本运作",
                createTime: "2019-09-29 16:10:50",
                updateTime: "2019-09-29 16:10:50",
                sort: 1
              },
              {
                id: 1058,
                value: "1",
                label: "投融资",
                createTime: "2019-09-29 16:10:50",
                updateTime: "2019-09-29 16:10:50",
                sort: 1
              },
              {
                id: 1059,
                value: "1",
                label: "众筹",
                createTime: "2019-09-29 16:10:50",
                updateTime: "2019-09-29 16:10:50",
                sort: 1
              },
              {
                id: 1060,
                value: "1",
                label: "基金",
                createTime: "2019-09-29 16:10:50",
                updateTime: "2019-09-29 16:10:50",
                sort: 1
              },
              {
                id: 1061,
                value: "1",
                label: "P2P",
                createTime: "2019-09-29 16:10:50",
                updateTime: "2019-09-29 16:10:50",
                sort: 1
              },
              {
                id: 1062,
                value: "1",
                label: "新三板",
                createTime: "2019-09-29 16:10:50",
                updateTime: "2019-09-29 16:10:50",
                sort: 1
              },
              {
                id: 1063,
                value: "1",
                label: "境外投资",
                createTime: "2019-09-29 16:10:50",
                updateTime: "2019-09-29 16:10:50",
                sort: 1
              },
              {
                id: 1064,
                value: "1",
                label: "财务会计",
                createTime: "2019-09-29 16:10:50",
                updateTime: "2019-09-29 16:10:50",
                sort: 1
              },
              {
                id: 1065,
                value: "1",
                label: "IPO",
                createTime: "2019-09-29 16:10:50",
                updateTime: "2019-09-29 16:10:50",
                sort: 1
              }
            ]
          },
          {
            id: 1028,
            value: "3",
            label: "工业制造",
            createTime: "2019-09-19 17:42:58",
            updateTime: "2019-09-19 17:42:58",
            sort: 1,
            children: [
              {
                id: 1066,
                value: "1",
                label: "轻纺",
                createTime: "2019-09-29 16:11:11",
                updateTime: "2019-09-29 16:11:11",
                sort: 1
              },
              {
                id: 1067,
                value: "2",
                label: "节能环保",
                createTime: "2019-09-29 16:11:11",
                updateTime: "2019-09-29 16:11:11",
                sort: 1
              },
              {
                id: 1068,
                value: "1",
                label: "汽车",
                createTime: "2019-09-29 16:11:11",
                updateTime: "2019-09-29 16:11:11",
                sort: 1
              },
              {
                id: 1069,
                value: "1",
                label: "机械设备",
                createTime: "2019-09-29 16:11:11",
                updateTime: "2019-09-29 16:11:11",
                sort: 1
              },
              {
                id: 1070,
                value: "1",
                label: "能源化工",
                createTime: "2019-09-29 16:11:11",
                updateTime: "2019-09-29 16:11:11",
                sort: 1
              },
              {
                id: 1071,
                value: "1",
                label: "新材料",
                createTime: "2019-09-29 16:11:11",
                updateTime: "2019-09-29 16:11:11",
                sort: 1
              },
              {
                id: 1072,
                value: "1",
                label: "航天工业",
                createTime: "2019-09-29 16:11:11",
                updateTime: "2019-09-29 16:11:11",
                sort: 1
              },
              {
                id: 1073,
                value: "1",
                label: "电子电器",
                createTime: "2019-09-29 16:11:11",
                updateTime: "2019-09-29 16:11:11",
                sort: 1
              },
              {
                id: 1074,
                value: "1",
                label: "LED",
                createTime: "2019-09-29 16:11:11",
                updateTime: "2019-09-29 16:11:11",
                sort: 1
              },
              {
                id: 1075,
                value: "1",
                label: "智能制造",
                createTime: "2019-09-29 16:11:11",
                updateTime: "2019-09-29 16:11:11",
                sort: 1
              },
              {
                id: 1076,
                value: "1",
                label: "工艺品",
                createTime: "2019-09-29 16:11:11",
                updateTime: "2019-09-29 16:11:11",
                sort: 1
              },
              {
                id: 1077,
                value: "1",
                label: "加工制造",
                createTime: "2019-09-29 16:11:11",
                updateTime: "2019-09-29 16:11:11",
                sort: 1
              },
              {
                id: 1078,
                value: "1",
                label: "新能源",
                createTime: "2019-09-29 16:11:11",
                updateTime: "2019-09-29 16:11:11",
                sort: 1
              },
              {
                id: 1079,
                value: "1",
                label: "海洋工程",
                createTime: "2019-09-29 16:11:11",
                updateTime: "2019-09-29 16:11:11",
                sort: 1
              },
              {
                id: 1080,
                value: "1",
                label: "安防",
                createTime: "2019-09-29 16:13:15",
                updateTime: "2019-09-29 16:13:15",
                sort: 1
              },
              {
                id: 1081,
                value: "1",
                label: "工业技术",
                createTime: "2019-09-29 16:13:15",
                updateTime: "2019-09-29 16:13:15",
                sort: 1
              }
            ]
          },
          {
            id: 1029,
            value: "4",
            label: "农林牧渔",
            createTime: "2019-09-19 17:43:20",
            updateTime: "2019-09-19 17:43:20",
            sort: 1,
            children: [
              {
                id: 1082,
                value: "1",
                label: "林业",
                createTime: "2019-09-29 16:13:23",
                updateTime: "2019-09-29 16:13:23",
                sort: 1
              },
              {
                id: 1083,
                value: "2",
                label: "畜牧业",
                createTime: "2019-09-29 16:13:23",
                updateTime: "2019-09-29 16:13:23",
                sort: 1
              },
              {
                id: 1084,
                value: "1",
                label: "园林",
                createTime: "2019-09-29 16:13:23",
                updateTime: "2019-09-29 16:13:23",
                sort: 1
              },
              {
                id: 1085,
                value: "1",
                label: "农业",
                createTime: "2019-09-29 16:13:23",
                updateTime: "2019-09-29 16:13:23",
                sort: 1
              },
              {
                id: 1086,
                value: "1",
                label: "渔业",
                createTime: "2019-09-29 16:13:23",
                updateTime: "2019-09-29 16:13:23",
                sort: 1
              },
              {
                id: 1087,
                value: "1",
                label: "粮油",
                createTime: "2019-09-29 16:13:23",
                updateTime: "2019-09-29 16:13:23",
                sort: 1
              },
              {
                id: 1088,
                value: "1",
                label: "生物技术",
                createTime: "2019-09-29 16:13:23",
                updateTime: "2019-09-29 16:13:23",
                sort: 1
              },
              {
                id: 1089,
                value: "1",
                label: "水产养殖",
                createTime: "2019-09-29 16:13:23",
                updateTime: "2019-09-29 16:13:23",
                sort: 1
              },
              {
                id: 1090,
                value: "1",
                label: "农业机械",
                createTime: "2019-09-29 16:13:23",
                updateTime: "2019-09-29 16:13:23",
                sort: 1
              },
              {
                id: 1091,
                value: "1",
                label: "转基因",
                createTime: "2019-09-29 16:13:23",
                updateTime: "2019-09-29 16:13:23",
                sort: 1
              }
            ]
          },
          {
            id: 1030,
            value: "5",
            label: "服务行业",
            createTime: "2019-09-19 17:43:34",
            updateTime: "2019-09-19 17:43:34",
            sort: 1,
            children: [
              {
                id: 1092,
                value: "1",
                label: "食品餐饮",
                createTime: "2019-09-29 16:13:45",
                updateTime: "2019-09-29 16:13:45",
                sort: 1
              },
              {
                id: 1093,
                value: "2",
                label: "酒店旅游",
                createTime: "2019-09-29 16:13:45",
                updateTime: "2019-09-29 16:13:45",
                sort: 1
              },
              {
                id: 1094,
                value: "1",
                label: "地产建筑",
                createTime: "2019-09-29 16:13:45",
                updateTime: "2019-09-29 16:13:45",
                sort: 1
              },
              {
                id: 1095,
                value: "1",
                label: "纺织服装",
                createTime: "2019-09-29 16:13:45",
                updateTime: "2019-09-29 16:13:45",
                sort: 1
              },
              {
                id: 1096,
                value: "1",
                label: "交通物流",
                createTime: "2019-09-29 16:13:45",
                updateTime: "2019-09-29 16:13:45",
                sort: 1
              },
              {
                id: 1097,
                value: "1",
                label: "零售",
                createTime: "2019-09-29 16:13:45",
                updateTime: "2019-09-29 16:13:45",
                sort: 1
              },
              {
                id: 1098,
                value: "1",
                label: "贸易",
                createTime: "2019-09-29 16:13:45",
                updateTime: "2019-09-29 16:13:45",
                sort: 1
              },
              {
                id: 1099,
                value: "1",
                label: "文化传媒",
                createTime: "2019-09-29 16:13:45",
                updateTime: "2019-09-29 16:13:45",
                sort: 1
              },
              {
                id: 1100,
                value: "1",
                label: "营销推广",
                createTime: "2019-09-29 16:13:45",
                updateTime: "2019-09-29 16:13:45",
                sort: 1
              },
              {
                id: 1101,
                value: "1",
                label: "家居建材",
                createTime: "2019-09-29 16:13:45",
                updateTime: "2019-09-29 16:13:45",
                sort: 1
              },
              {
                id: 1102,
                value: "1",
                label: "奢侈品",
                createTime: "2019-09-29 16:13:45",
                updateTime: "2019-09-29 16:13:45",
                sort: 1
              },
              {
                id: 1103,
                value: "1",
                label: "婚庆",
                createTime: "2019-09-29 16:13:45",
                updateTime: "2019-09-29 16:13:45",
                sort: 1
              }
            ]
          },
          {
            id: 1031,
            value: "6",
            label: "健康医疗",
            createTime: "2019-09-19 17:43:47",
            updateTime: "2019-09-19 17:43:47",
            sort: 1,
            children: [
              {
                id: 1104,
                value: "1",
                label: "养老保健",
                createTime: "2019-09-29 16:13:57",
                updateTime: "2019-09-29 16:13:57",
                sort: 1
              },
              {
                id: 1105,
                value: "2",
                label: "医疗器械",
                createTime: "2019-09-29 16:13:57",
                updateTime: "2019-09-29 16:13:57",
                sort: 1
              },
              {
                id: 1106,
                value: "1",
                label: "外科",
                createTime: "2019-09-29 16:13:57",
                updateTime: "2019-09-29 16:13:57",
                sort: 1
              },
              {
                id: 1107,
                value: "1",
                label: "内科",
                createTime: "2019-09-29 16:13:57",
                updateTime: "2019-09-29 16:13:57",
                sort: 1
              },
              {
                id: 1108,
                value: "1",
                label: "西医",
                createTime: "2019-09-29 16:13:57",
                updateTime: "2019-09-29 16:13:57",
                sort: 1
              },
              {
                id: 1109,
                value: "1",
                label: "中医",
                createTime: "2019-09-29 16:13:57",
                updateTime: "2019-09-29 16:13:57",
                sort: 1
              },
              {
                id: 1110,
                value: "1",
                label: "护理",
                createTime: "2019-09-29 16:13:57",
                updateTime: "2019-09-29 16:13:57",
                sort: 1
              },
              {
                id: 1111,
                value: "1",
                label: "生物医药",
                createTime: "2019-09-29 16:13:57",
                updateTime: "2019-09-29 16:13:57",
                sort: 1
              },
              {
                id: 1112,
                value: "1",
                label: "临床医学",
                createTime: "2019-09-29 16:13:57",
                updateTime: "2019-09-29 16:13:57",
                sort: 1
              },
              {
                id: 1113,
                value: "1",
                label: "宠物诊疗",
                createTime: "2019-09-29 16:13:57",
                updateTime: "2019-09-29 16:13:57",
                sort: 1
              },
              {
                id: 1114,
                value: "1",
                label: "整形美容",
                createTime: "2019-09-29 16:13:57",
                updateTime: "2019-09-29 16:13:57",
                sort: 1
              },
              {
                id: 1115,
                value: "1",
                label: "医疗",
                createTime: "2019-09-29 16:13:57",
                updateTime: "2019-09-29 16:13:57",
                sort: 1
              }
            ]
          },
          {
            id: 1032,
            value: "7",
            label: "教育培训",
            createTime: "2019-09-19 17:44:05",
            updateTime: "2019-09-19 17:44:05",
            sort: 1,
            children: [
              {
                id: 1116,
                value: "1",
                label: "企业管理",
                createTime: "2019-09-29 16:14:19",
                updateTime: "2019-09-29 16:14:19",
                sort: 1
              },
              {
                id: 1117,
                value: "2",
                label: "创业指导",
                createTime: "2019-09-29 16:14:19",
                updateTime: "2019-09-29 16:14:19",
                sort: 1
              },
              {
                id: 1118,
                value: "1",
                label: "外语",
                createTime: "2019-09-29 16:14:19",
                updateTime: "2019-09-29 16:14:19",
                sort: 1
              },
              {
                id: 1119,
                value: "1",
                label: "人力资源",
                createTime: "2019-09-29 16:14:19",
                updateTime: "2019-09-29 16:14:19",
                sort: 1
              },
              {
                id: 1120,
                value: "1",
                label: "艺体培训",
                createTime: "2019-09-29 16:14:19",
                updateTime: "2019-09-29 16:14:19",
                sort: 1
              },
              {
                id: 1121,
                value: "1",
                label: "留学",
                createTime: "2019-09-29 16:14:19",
                updateTime: "2019-09-29 16:14:19",
                sort: 1
              },
              {
                id: 1122,
                value: "1",
                label: "就业",
                createTime: "2019-09-29 16:14:19",
                updateTime: "2019-09-29 16:14:19",
                sort: 1
              },
              {
                id: 1123,
                value: "1",
                label: "职业教育",
                createTime: "2019-09-29 16:14:19",
                updateTime: "2019-09-29 16:14:19",
                sort: 1
              },
              {
                id: 1124,
                value: "1",
                label: "幼教",
                createTime: "2019-09-29 16:14:19",
                updateTime: "2019-09-29 16:14:19",
                sort: 1
              },
              {
                id: 1125,
                value: "1",
                label: "在线教育",
                createTime: "2019-09-29 16:14:19",
                updateTime: "2019-09-29 16:14:19",
                sort: 1
              }
            ]
          },
          {
            id: 1033,
            value: "8",
            label: "学术研讨",
            createTime: "2019-09-19 17:44:16",
            updateTime: "2019-09-19 17:44:16",
            sort: 1,
            children: [
              {
                id: 1126,
                value: "1",
                label: "学术",
                createTime: "2019-09-29 16:14:29",
                updateTime: "2019-09-29 16:14:29",
                sort: 1
              },
              {
                id: 1127,
                value: "2",
                label: "研讨",
                createTime: "2019-09-29 16:14:29",
                updateTime: "2019-09-29 16:14:29",
                sort: 1
              },
              {
                id: 1128,
                value: "1",
                label: "管理学",
                createTime: "2019-09-29 16:14:29",
                updateTime: "2019-09-29 16:14:29",
                sort: 1
              },
              {
                id: 1129,
                value: "1",
                label: "经济学",
                createTime: "2019-09-29 16:14:29",
                updateTime: "2019-09-29 16:14:29",
                sort: 1
              },
              {
                id: 1130,
                value: "1",
                label: "语言学",
                createTime: "2019-09-29 16:14:29",
                updateTime: "2019-09-29 16:14:29",
                sort: 1
              },
              {
                id: 1131,
                value: "1",
                label: "医学",
                createTime: "2019-09-29 16:14:29",
                updateTime: "2019-09-29 16:14:29",
                sort: 1
              },
              {
                id: 1132,
                value: "1",
                label: "物理学",
                createTime: "2019-09-29 16:14:29",
                updateTime: "2019-09-29 16:14:29",
                sort: 1
              },
              {
                id: 1133,
                value: "1",
                label: "数学",
                createTime: "2019-09-29 16:14:29",
                updateTime: "2019-09-29 16:14:29",
                sort: 1
              },
              {
                id: 1134,
                value: "1",
                label: "历史学",
                createTime: "2019-09-29 16:14:29",
                updateTime: "2019-09-29 16:14:29",
                sort: 1
              },
              {
                id: 1135,
                value: "1",
                label: "教育学",
                createTime: "2019-09-29 16:14:29",
                updateTime: "2019-09-29 16:14:29",
                sort: 1
              },
              {
                id: 1136,
                value: "1",
                label: "心理学",
                createTime: "2019-09-29 16:14:29",
                updateTime: "2019-09-29 16:14:29",
                sort: 1
              },
              {
                id: 1137,
                value: "1",
                label: "生物学",
                createTime: "2019-09-29 16:14:29",
                updateTime: "2019-09-29 16:14:29",
                sort: 1
              }
            ]
          },
          {
            id: 1034,
            value: "9",
            label: "社群活动",
            createTime: "2019-09-19 17:44:28",
            updateTime: "2019-09-19 17:44:28",
            sort: 1,
            children: [
              {
                id: 1138,
                value: "1",
                label: "公益",
                createTime: "2019-09-29 16:14:40",
                updateTime: "2019-09-29 16:14:40",
                sort: 1
              },
              {
                id: 1139,
                value: "2",
                label: "演出",
                createTime: "2019-09-29 16:14:40",
                updateTime: "2019-09-29 16:14:40",
                sort: 1
              },
              {
                id: 1140,
                value: "1",
                label: "联盟",
                createTime: "2019-09-29 16:14:40",
                updateTime: "2019-09-29 16:14:40",
                sort: 1
              },
              {
                id: 1141,
                value: "1",
                label: "社交",
                createTime: "2019-09-29 16:14:40",
                updateTime: "2019-09-29 16:14:40",
                sort: 1
              },
              {
                id: 1142,
                value: "1",
                label: "时尚",
                createTime: "2019-09-29 16:14:40",
                updateTime: "2019-09-29 16:14:40",
                sort: 1
              },
              {
                id: 1143,
                value: "1",
                label: "娱乐休闲",
                createTime: "2019-09-29 16:14:40",
                updateTime: "2019-09-29 16:14:40",
                sort: 1
              },
              {
                id: 1144,
                value: "1",
                label: "生活美食",
                createTime: "2019-09-29 16:14:40",
                updateTime: "2019-09-29 16:14:40",
                sort: 1
              },
              {
                id: 1145,
                value: "1",
                label: "亲子家庭",
                createTime: "2019-09-29 16:14:40",
                updateTime: "2019-09-29 16:14:40",
                sort: 1
              },
              {
                id: 1146,
                value: "1",
                label: "体育竞技",
                createTime: "2019-09-29 16:14:40",
                updateTime: "2019-09-29 16:14:40",
                sort: 1
              },
              {
                id: 1147,
                value: "1",
                label: "户外运动",
                createTime: "2019-09-29 16:14:40",
                updateTime: "2019-09-29 16:14:40",
                sort: 1
              },
              {
                id: 1148,
                value: "1",
                label: "家政",
                createTime: "2019-09-29 16:14:40",
                updateTime: "2019-09-29 16:14:40",
                sort: 1
              },
              {
                id: 1149,
                value: "1",
                label: "健身",
                createTime: "2019-09-29 16:14:40",
                updateTime: "2019-09-29 16:14:40",
                sort: 1
              },
              {
                id: 1150,
                value: "1",
                label: "宠物",
                createTime: "2019-09-29 16:14:40",
                updateTime: "2019-09-29 16:14:40",
                sort: 1
              },
              {
                id: 1151,
                value: "1",
                label: "宗教",
                createTime: "2019-09-29 16:14:40",
                updateTime: "2019-09-29 16:14:40",
                sort: 1
              }
            ]
          },
          {
            id: 1035,
            value: "10",
            label: "其他",
            createTime: "2019-09-19 17:44:43",
            updateTime: "2019-09-19 17:44:43",
            sort: 1,
            children: []
          }
        ],
        invoice_type: [
          {
            id: 1255,
            value: "1",
            label: "增值税专用发票",
            createTime: "2021-03-25 14:49:06",
            updateTime: "2021-03-25 14:49:06",
            sort: 1,
            children: []
          },
          {
            id: 1256,
            value: "2",
            label: "增值税普通发票",
            createTime: "2021-03-25 14:49:13",
            updateTime: "2021-03-25 14:49:13",
            sort: 1,
            children: []
          },
          {
            id: 1257,
            value: "3",
            label: "交通类发票",
            createTime: "2021-03-25 14:49:19",
            updateTime: "2021-03-25 14:49:19",
            sort: 1,
            children: []
          }
        ],
        client_source: [],
        FAMS_HOLD_TYPE: [
          {
            id: 1014,
            value: "1",
            label: "集团持有",
            createTime: "2019-08-28 11:23:23",
            updateTime: "2019-08-28 11:23:23",
            sort: 1,
            children: []
          },
          {
            id: 1015,
            value: "2",
            label: "组织持有",
            createTime: "2019-08-28 11:23:31",
            updateTime: "2019-08-28 11:23:31",
            sort: 1,
            children: []
          },
          {
            id: 1016,
            value: "3",
            label: "个人持有",
            createTime: "2019-08-28 11:23:41",
            updateTime: "2019-08-28 11:23:41",
            sort: 1,
            children: []
          },
          {
            id: 1017,
            value: "4",
            label: "外资持有",
            createTime: "2019-08-28 11:23:53",
            updateTime: "2019-08-28 11:23:53",
            sort: 1,
            children: []
          }
        ],
        fams_wealth_action: [
          {
            id: 648,
            value: "1",
            label: "提交",
            createTime: "2019-06-03 11:49:47",
            updateTime: "2019-06-03 11:49:47",
            sort: 1,
            children: []
          },
          {
            id: 649,
            value: "2",
            label: "审核",
            createTime: "2019-05-28 11:16:01",
            updateTime: "2019-05-28 11:16:01",
            sort: 1,
            children: []
          },
          {
            id: 650,
            value: "3",
            label: "评论",
            createTime: "2019-05-28 11:16:14",
            updateTime: "2019-05-28 11:16:14",
            sort: 1,
            children: []
          },
          {
            id: 651,
            value: "4",
            label: "评价",
            createTime: "2019-05-28 11:16:23",
            updateTime: "2019-05-28 11:16:23",
            sort: 1,
            children: []
          },
          {
            id: 652,
            value: "5",
            label: "下载",
            createTime: "2019-05-28 11:16:33",
            updateTime: "2019-05-28 11:16:33",
            sort: 1,
            children: []
          },
          {
            id: 653,
            value: "6",
            label: "点赞",
            createTime: "2019-05-28 11:16:53",
            updateTime: "2019-05-28 11:16:53",
            sort: 1,
            children: []
          },
          {
            id: 654,
            value: "7",
            label: "纠错",
            createTime: "2019-05-28 11:17:01",
            updateTime: "2019-05-28 11:17:01",
            sort: 1,
            children: []
          },
          {
            id: 655,
            value: "8",
            label: "确认",
            createTime: "2019-05-28 11:17:20",
            updateTime: "2019-05-28 11:17:20",
            sort: 1,
            children: []
          },
          {
            id: 656,
            value: "9",
            label: "分享",
            createTime: "2019-05-28 11:18:29",
            updateTime: "2019-05-28 11:18:29",
            sort: 1,
            children: []
          },
          {
            id: 664,
            value: "10",
            label: "登录",
            createTime: "2019-06-03 11:48:55",
            updateTime: "2019-06-03 11:48:55",
            sort: 1,
            children: []
          }
        ],
        DECLARE_METHOD: [
          {
            id: 779,
            value: "1",
            label: "自主申报",
            createTime: "2019-07-05 15:52:47",
            updateTime: "2019-07-05 15:52:47",
            sort: 1,
            children: []
          },
          {
            id: 780,
            value: "2",
            label: "主管部门推荐",
            createTime: "2019-07-05 15:52:47",
            updateTime: "2019-07-05 15:52:47",
            sort: 2,
            children: []
          }
        ],
        QUESTION_TYPE: [
          {
            id: 670,
            value: "2",
            label: "非评测项目",
            createTime: "2019-06-14 14:16:59",
            updateTime: "2019-06-14 14:16:59",
            sort: 1,
            children: []
          },
          {
            id: 671,
            value: "1",
            label: "评测项目",
            createTime: "2019-06-11 11:11:53",
            updateTime: "2019-06-11 11:11:53",
            sort: 1,
            children: []
          }
        ],
        hrms_transfer_type: [
          {
            id: 425,
            value: "1",
            label: "职称",
            createTime: "2019-04-20 23:37:54",
            updateTime: "2019-04-20 23:37:54",
            sort: 1,
            children: []
          },
          {
            id: 426,
            value: "2",
            label: "职务",
            createTime: "2019-04-20 23:58:35",
            updateTime: "2019-04-20 23:58:35",
            sort: 2,
            children: []
          },
          {
            id: 427,
            value: "3",
            label: "岗位",
            createTime: "2019-04-20 23:58:30",
            updateTime: "2019-04-20 23:58:30",
            sort: 4,
            children: []
          }
        ],
        payment_status: [
          {
            id: 1290,
            value: "0",
            label: "未支付",
            createTime: "2021-04-12 22:32:25",
            updateTime: "2021-04-12 22:32:25",
            sort: 1,
            children: []
          },
          {
            id: 1291,
            value: "1",
            label: "已支付",
            createTime: "2021-04-12 22:32:31",
            updateTime: "2021-04-12 22:32:31",
            sort: 1,
            children: []
          }
        ],
        hrms_welfare_type: [
          {
            id: 422,
            value: "1",
            label: "社保",
            createTime: "2019-04-20 23:27:27",
            updateTime: "2019-04-20 23:27:27",
            sort: 1,
            children: []
          },
          {
            id: 423,
            value: "2",
            label: "公积金",
            createTime: "2019-04-20 23:27:36",
            updateTime: "2019-04-20 23:27:36",
            sort: 1,
            children: []
          },
          {
            id: 424,
            value: "3",
            label: "商业保险",
            createTime: "2019-04-20 23:28:25",
            updateTime: "2019-04-20 23:28:25",
            sort: 1,
            children: []
          }
        ],
        hrms_resident_type: [
          {
            id: 357,
            value: "1",
            label: "非农业户口",
            createTime: "2019-04-05 06:47:17",
            updateTime: "2019-04-05 06:47:17",
            sort: 1,
            children: []
          },
          {
            id: 358,
            value: "2",
            label: "农业户口",
            createTime: "2019-04-05 06:47:19",
            updateTime: "2019-04-05 06:47:19",
            sort: 1,
            children: []
          }
        ],
        cpms_task_page_type: [
          {
            id: 1397,
            value: "1",
            label: "星标",
            createTime: "2021-06-03 14:27:57",
            updateTime: "2021-06-03 14:27:57",
            sort: 1,
            children: []
          },
          {
            id: 1398,
            value: "2",
            label: "今日待办",
            createTime: "2021-06-03 14:28:08",
            updateTime: "2021-06-03 14:28:08",
            sort: 1,
            children: []
          },
          {
            id: 1399,
            value: "3",
            label: "计划",
            createTime: "2021-06-03 14:28:15",
            updateTime: "2021-06-03 14:28:15",
            sort: 1,
            children: []
          },
          {
            id: 1400,
            value: "4",
            label: "协作",
            createTime: "2021-06-03 14:28:21",
            updateTime: "2021-06-03 14:28:21",
            sort: 1,
            children: []
          }
        ],
        QUESTION_STATUS: [
          {
            id: 667,
            value: "3",
            label: "已结束",
            createTime: "2019-06-11 11:11:07",
            updateTime: "2019-06-11 11:11:07",
            sort: 1,
            children: []
          },
          {
            id: 668,
            value: "2",
            label: "草稿",
            createTime: "2019-06-11 11:11:13",
            updateTime: "2019-06-11 11:11:13",
            sort: 1,
            children: []
          },
          {
            id: 669,
            value: "1",
            label: "进行中",
            createTime: "2019-06-11 11:11:18",
            updateTime: "2019-06-11 11:11:18",
            sort: 1,
            children: []
          }
        ],
        bill_status: [
          {
            id: 1280,
            value: "0",
            label: "已开票未收款",
            createTime: "2021-04-12 11:03:36",
            updateTime: "2021-04-12 11:03:36",
            sort: 1,
            children: []
          },
          {
            id: 1281,
            value: "1",
            label: "已开票已收款",
            createTime: "2021-04-12 11:03:44",
            updateTime: "2021-04-12 11:03:44",
            sort: 1,
            children: []
          },
          {
            id: 1282,
            value: "2",
            label: "已开票部分收款",
            createTime: "2021-04-12 11:03:51",
            updateTime: "2021-04-12 11:03:51",
            sort: 1,
            children: []
          }
        ],
        hrms_work_place: [
          {
            id: 430,
            value: "1",
            label: "上海",
            createTime: "2019-04-24 04:01:55",
            updateTime: "2019-04-24 04:01:55",
            sort: 1,
            children: []
          },
          {
            id: 431,
            value: "2",
            label: "北京",
            createTime: "2019-04-24 04:02:06",
            updateTime: "2019-04-24 04:02:06",
            sort: 1,
            children: []
          },
          {
            id: 432,
            value: "3",
            label: "重庆",
            createTime: "2019-04-24 04:02:21",
            updateTime: "2019-04-24 04:02:21",
            sort: 1,
            children: []
          },
          {
            id: 433,
            value: "4",
            label: "浙江舟山",
            createTime: "2019-04-24 04:02:43",
            updateTime: "2019-04-24 04:02:43",
            sort: 1,
            children: []
          },
          {
            id: 434,
            value: "5",
            label: "浙江宁波",
            createTime: "2019-04-24 04:02:51",
            updateTime: "2019-04-24 04:02:51",
            sort: 1,
            children: []
          },
          {
            id: 435,
            value: "6",
            label: "浙江杭州",
            createTime: "2019-04-24 04:03:00",
            updateTime: "2019-04-24 04:03:00",
            sort: 1,
            children: []
          },
          {
            id: 436,
            value: "7",
            label: "广东广州",
            createTime: "2019-04-24 04:03:10",
            updateTime: "2019-04-24 04:03:10",
            sort: 1,
            children: []
          },
          {
            id: 437,
            value: "8",
            label: "广东佛山",
            createTime: "2019-04-24 04:03:20",
            updateTime: "2019-04-24 04:03:20",
            sort: 1,
            children: []
          },
          {
            id: 438,
            value: "9",
            label: "广东深圳",
            createTime: "2019-04-24 04:03:30",
            updateTime: "2019-04-24 04:03:30",
            sort: 1,
            children: []
          },
          {
            id: 439,
            value: "10",
            label: "广东肇庆",
            createTime: "2019-04-24 04:03:37",
            updateTime: "2019-04-24 04:03:37",
            sort: 1,
            children: []
          },
          {
            id: 440,
            value: "11",
            label: "湖南长沙",
            createTime: "2019-04-24 04:03:44",
            updateTime: "2019-04-24 04:03:44",
            sort: 1,
            children: []
          },
          {
            id: 441,
            value: "12",
            label: "湖南衡阳",
            createTime: "2019-04-24 04:03:51",
            updateTime: "2019-04-24 04:03:51",
            sort: 1,
            children: []
          },
          {
            id: 442,
            value: "13",
            label: "河北石家庄",
            createTime: "2019-04-24 04:03:58",
            updateTime: "2019-04-24 04:03:58",
            sort: 1,
            children: []
          },
          {
            id: 443,
            value: "14",
            label: "吉林长春",
            createTime: "2019-04-24 04:04:07",
            updateTime: "2019-04-24 04:04:07",
            sort: 1,
            children: []
          },
          {
            id: 444,
            value: "15",
            label: "青海西宁",
            createTime: "2019-04-24 04:04:17",
            updateTime: "2019-04-24 04:04:17",
            sort: 1,
            children: []
          },
          {
            id: 445,
            value: "16",
            label: "江西南昌",
            createTime: "2019-04-24 04:04:25",
            updateTime: "2019-04-24 04:04:25",
            sort: 1,
            children: []
          },
          {
            id: 446,
            value: "17",
            label: "海南海口",
            createTime: "2019-04-24 04:04:32",
            updateTime: "2019-04-24 04:04:32",
            sort: 1,
            children: []
          },
          {
            id: 447,
            value: "18",
            label: "江苏南京",
            createTime: "2019-04-24 04:04:39",
            updateTime: "2019-04-24 04:04:39",
            sort: 1,
            children: []
          },
          {
            id: 448,
            value: "19",
            label: "江苏无锡",
            createTime: "2019-04-24 04:04:46",
            updateTime: "2019-04-24 04:04:46",
            sort: 1,
            children: []
          },
          {
            id: 449,
            value: "20",
            label: "陕西西安",
            createTime: "2019-04-24 04:04:53",
            updateTime: "2019-04-24 04:04:53",
            sort: 1,
            children: []
          },
          {
            id: 450,
            value: "21",
            label: "云南昆明",
            createTime: "2019-04-24 04:04:59",
            updateTime: "2019-04-24 04:04:59",
            sort: 1,
            children: []
          },
          {
            id: 451,
            value: "22",
            label: "安徽合肥",
            createTime: "2019-04-24 04:05:16",
            updateTime: "2019-04-24 04:05:16",
            sort: 1,
            children: []
          },
          {
            id: 588,
            value: "23",
            label: "海南三亚",
            createTime: "2019-05-17 17:09:02",
            updateTime: "2019-05-17 17:09:02",
            sort: 1,
            children: []
          }
        ],
        hrms_arrive_time: [
          {
            id: 21,
            value: "1",
            label: "一周内",
            createTime: "2019-03-10 03:24:06",
            updateTime: "2019-03-10 03:24:06",
            sort: 1,
            children: []
          },
          {
            id: 22,
            value: "2",
            label: "一个月内",
            createTime: "2019-03-10 03:24:17",
            updateTime: "2019-03-10 03:24:17",
            sort: 1,
            children: []
          },
          {
            id: 23,
            value: "3",
            label: "一个月以上",
            createTime: "2019-03-10 03:24:29",
            updateTime: "2019-03-10 03:24:29",
            sort: 1,
            children: []
          }
        ],
        hrms_flow_type: [
          {
            id: 1370,
            value: "1",
            label: "员工自评",
            createTime: "2021-05-07 11:48:55",
            updateTime: "2021-05-07 11:48:55",
            sort: 1,
            children: []
          },
          {
            id: 1371,
            value: "2",
            label: "上级评价",
            createTime: "2021-05-07 11:49:06",
            updateTime: "2021-05-07 11:49:06",
            sort: 1,
            children: []
          },
          {
            id: 1372,
            value: "3",
            label: "绩效校准",
            createTime: "2021-05-07 11:49:13",
            updateTime: "2021-05-07 11:49:13",
            sort: 1,
            children: []
          }
        ],
        PRODUCT_TYPE: [
          {
            id: 998,
            value: "1",
            label: "业务体系",
            createTime: "2019-08-14 14:54:24",
            updateTime: "2019-08-14 14:54:24",
            sort: 1,
            children: []
          },
          {
            id: 999,
            value: "2",
            label: "数据产品",
            createTime: "2019-08-14 14:54:33",
            updateTime: "2019-08-14 14:54:33",
            sort: 1,
            children: []
          },
          {
            id: 1000,
            value: "3",
            label: "行业平台",
            createTime: "2019-08-14 14:54:42",
            updateTime: "2019-08-14 14:54:42",
            sort: 1,
            children: []
          }
        ],
        mlms_honor_qual_type: [
          {
            id: 455,
            value: "7",
            label: "软件评测",
            createTime: "2019-04-26 08:40:10",
            updateTime: "2019-04-26 08:40:10",
            sort: 1,
            children: []
          },
          {
            id: 677,
            value: "8",
            label: "资质认证",
            createTime: "2019-06-12 16:56:39",
            updateTime: "2019-06-12 16:56:39",
            sort: 1,
            children: []
          },
          {
            id: 454,
            value: "6",
            label: "评选奖项",
            createTime: "2019-04-26 08:42:00",
            updateTime: "2019-04-26 08:42:00",
            sort: 5,
            children: []
          },
          {
            id: 121,
            value: "3",
            label: "商标和专利",
            createTime: "2019-06-12 16:52:48",
            updateTime: "2019-06-12 16:52:48",
            sort: 6,
            children: []
          },
          {
            id: 453,
            value: "5",
            label: "软件认证",
            createTime: "2019-04-26 08:41:29",
            updateTime: "2019-04-26 08:41:29",
            sort: 7,
            children: []
          },
          {
            id: 120,
            value: "2",
            label: "软著和版权",
            createTime: "2019-06-12 16:52:32",
            updateTime: "2019-06-12 16:52:32",
            sort: 8,
            children: []
          },
          {
            id: 119,
            value: "1",
            label: "企业基本信息",
            createTime: "2019-06-12 16:53:12",
            updateTime: "2019-06-12 16:53:12",
            sort: 9,
            children: []
          }
        ],
        POLICY_SCALE: [
          {
            id: 861,
            value: "1",
            label: "大型企业",
            createTime: "2019-07-05 15:59:37",
            updateTime: "2019-07-05 15:59:37",
            sort: 1,
            children: []
          },
          {
            id: 862,
            value: "2",
            label: "规上企业",
            createTime: "2019-07-05 15:59:37",
            updateTime: "2019-07-05 15:59:37",
            sort: 2,
            children: []
          },
          {
            id: 863,
            value: "3",
            label: "中小企业",
            createTime: "2019-07-05 15:59:37",
            updateTime: "2019-07-05 15:59:37",
            sort: 3,
            children: []
          },
          {
            id: 864,
            value: "4",
            label: "小微企业",
            createTime: "2019-07-05 15:59:37",
            updateTime: "2019-07-05 15:59:37",
            sort: 4,
            children: []
          },
          {
            id: 865,
            value: "5",
            label: "不限",
            createTime: "2019-07-05 15:59:37",
            updateTime: "2019-07-05 15:59:37",
            sort: 5,
            children: []
          }
        ],
        fams_interest_rate: [
          {
            id: 574,
            value: "2",
            label: "2",
            createTime: "2019-05-10 11:42:55",
            updateTime: "2019-05-10 11:42:55",
            sort: 1,
            children: []
          },
          {
            id: 575,
            value: "3",
            label: "3",
            createTime: "2019-05-10 11:43:04",
            updateTime: "2019-05-10 11:43:04",
            sort: 1,
            children: []
          },
          {
            id: 577,
            value: "1",
            label: "0",
            createTime: "2019-05-10 11:42:44",
            updateTime: "2019-05-10 11:42:44",
            sort: 1,
            children: []
          }
        ],
        employee_nature: [
          {
            id: 1265,
            value: "1",
            label: "全职",
            createTime: "2021-04-07 10:48:04",
            updateTime: "2021-04-07 10:48:04",
            sort: 1,
            children: []
          },
          {
            id: 1266,
            value: "2",
            label: "兼职",
            createTime: "2021-04-07 10:48:11",
            updateTime: "2021-04-07 10:48:11",
            sort: 1,
            children: []
          },
          {
            id: 1267,
            value: "3",
            label: "实习",
            createTime: "2021-04-07 10:48:19",
            updateTime: "2021-04-07 10:48:19",
            sort: 1,
            children: []
          },
          {
            id: 1268,
            value: "4",
            label: "其他",
            createTime: "2021-04-07 10:48:25",
            updateTime: "2021-04-07 10:48:25",
            sort: 1,
            children: []
          }
        ],
        IS_USEFUL: [
          {
            id: 944,
            value: "1",
            label: "有效",
            createTime: "2019-07-05 16:08:53",
            updateTime: "2019-07-05 16:08:53",
            sort: 1,
            children: []
          },
          {
            id: 945,
            value: "2",
            label: "失效",
            createTime: "2019-07-05 16:08:53",
            updateTime: "2019-07-05 16:08:53",
            sort: 2,
            children: []
          }
        ],
        DECLARE_FUND: [
          {
            id: 853,
            value: "1",
            label: "0-10万",
            createTime: "2019-07-05 15:58:15",
            updateTime: "2019-07-05 15:58:15",
            sort: 1,
            children: []
          },
          {
            id: 854,
            value: "2",
            label: "10-50万",
            createTime: "2019-07-05 15:58:15",
            updateTime: "2019-07-05 15:58:15",
            sort: 2,
            children: []
          },
          {
            id: 855,
            value: "3",
            label: "50-100万",
            createTime: "2019-07-05 15:58:15",
            updateTime: "2019-07-05 15:58:15",
            sort: 3,
            children: []
          },
          {
            id: 856,
            value: "4",
            label: "100-200万",
            createTime: "2019-07-05 15:58:15",
            updateTime: "2019-07-05 15:58:15",
            sort: 4,
            children: []
          },
          {
            id: 857,
            value: "5",
            label: "200-500万",
            createTime: "2019-07-05 15:58:15",
            updateTime: "2019-07-05 15:58:15",
            sort: 5,
            children: []
          },
          {
            id: 858,
            value: "6",
            label: "500-1000万",
            createTime: "2019-07-05 15:58:15",
            updateTime: "2019-07-05 15:58:15",
            sort: 6,
            children: []
          },
          {
            id: 859,
            value: "7",
            label: "1000-2000万",
            createTime: "2019-07-05 15:58:15",
            updateTime: "2019-07-05 15:58:15",
            sort: 7,
            children: []
          },
          {
            id: 860,
            value: "8",
            label: "2000万以上",
            createTime: "2019-07-05 15:58:15",
            updateTime: "2019-07-05 15:58:15",
            sort: 8,
            children: []
          }
        ],
        edu_staff_level: [
          {
            id: 1326,
            value: "1",
            label: "一级",
            createTime: "2021-04-19 15:56:50",
            updateTime: "2021-04-19 15:56:50",
            sort: 1,
            children: []
          },
          {
            id: 1327,
            value: "2",
            label: "二级",
            createTime: "2021-04-19 15:56:55",
            updateTime: "2021-04-19 15:56:55",
            sort: 1,
            children: []
          },
          {
            id: 1328,
            value: "3",
            label: "三级",
            createTime: "2021-04-19 15:56:59",
            updateTime: "2021-04-19 15:56:59",
            sort: 1,
            children: []
          },
          {
            id: 1329,
            value: "4",
            label: "四级",
            createTime: "2021-04-19 15:57:05",
            updateTime: "2021-04-19 15:57:05",
            sort: 1,
            children: []
          },
          {
            id: 1330,
            value: "5",
            label: "五级",
            createTime: "2021-04-19 15:57:14",
            updateTime: "2021-04-19 15:57:14",
            sort: 1,
            children: []
          },
          {
            id: 1331,
            value: "6",
            label: "六级",
            createTime: "2021-04-19 15:57:19",
            updateTime: "2021-04-19 15:57:19",
            sort: 1,
            children: []
          },
          {
            id: 1332,
            value: "7",
            label: "七级",
            createTime: "2021-04-19 15:57:23",
            updateTime: "2021-04-19 15:57:23",
            sort: 1,
            children: []
          },
          {
            id: 1333,
            value: "8",
            label: "八级",
            createTime: "2021-04-19 15:57:28",
            updateTime: "2021-04-19 15:57:28",
            sort: 1,
            children: []
          },
          {
            id: 1334,
            value: "9",
            label: "九级",
            createTime: "2021-04-19 15:57:33",
            updateTime: "2021-04-19 15:57:33",
            sort: 1,
            children: []
          },
          {
            id: 1335,
            value: "10",
            label: "十级",
            createTime: "2021-04-19 15:57:43",
            updateTime: "2021-04-19 15:57:43",
            sort: 1,
            children: []
          },
          {
            id: 1336,
            value: "11",
            label: "十一级",
            createTime: "2021-04-19 15:57:50",
            updateTime: "2021-04-19 15:57:50",
            sort: 1,
            children: []
          },
          {
            id: 1337,
            value: "12",
            label: "十二级",
            createTime: "2021-04-19 15:57:56",
            updateTime: "2021-04-19 15:57:56",
            sort: 1,
            children: []
          },
          {
            id: 1338,
            value: "13",
            label: "十三级",
            createTime: "2021-04-19 15:58:03",
            updateTime: "2021-04-19 15:58:03",
            sort: 1,
            children: []
          }
        ],
        mlms_visit_type: [
          {
            id: 108,
            value: "4",
            label: "其他",
            createTime: "2019-03-20 22:22:12",
            updateTime: "2019-03-20 22:22:12",
            sort: 1,
            children: []
          },
          {
            id: 107,
            value: "3",
            label: "线上沟通",
            createTime: "2019-04-26 08:56:45",
            updateTime: "2019-04-26 08:56:45",
            sort: 2,
            children: []
          },
          {
            id: 106,
            value: "2",
            label: "电话沟通",
            createTime: "2019-04-26 08:56:33",
            updateTime: "2019-04-26 08:56:33",
            sort: 3,
            children: []
          },
          {
            id: 105,
            value: "1",
            label: "面访",
            createTime: "2019-04-26 08:56:17",
            updateTime: "2019-04-26 08:56:17",
            sort: 4,
            children: []
          }
        ]
      });
    }
  }
] as MockMethod[];
