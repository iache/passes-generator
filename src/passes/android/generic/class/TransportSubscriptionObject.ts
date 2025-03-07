import {PassTypeEnum} from "../../../passes.types";
import {format} from "date-fns/format";
import {dateFormat, dateTimeFormat} from "./config";
import {fromZonedTime} from "date-fns-tz";

export default class TransportSubscriptionObject {
  static getClass(id) {
    return {
      "id": id,
      "classTemplateInfo": {
        "cardTemplateOverride": {
          "cardRowTemplateInfos": [
            {
              "twoItems": {
                "startItem": {
                  "firstValue": {
                    "fields": [
                      {
                        "fieldPath": "object.textModulesData['field_1']",
                      },
                    ],
                  },
                },
                "endItem": {
                  "firstValue": {
                    "fields": [
                      {
                        "fieldPath": "object.textModulesData['field_2']",
                      },
                    ],
                  },
                },
              },
            },
            {
              "twoItems": {
                "startItem": {
                  "firstValue": {
                    "fields": [
                      {
                        "fieldPath": "object.textModulesData['field_3']",
                      },
                    ],
                  },
                },
                "endItem": {
                  "firstValue": {
                    "fields": [
                      {
                        "fieldPath": "object.textModulesData['field_4']",
                      },
                    ],
                  },
                },
              },
            },
            {
              "twoItems": {
                "startItem": {
                  "firstValue": {
                    "fields": [
                      {
                        "fieldPath": "object.textModulesData['field_5']",
                      },
                    ],
                  },
                },
                "endItem": {
                  "firstValue": {
                    "fields": [
                      {
                        "fieldPath": "object.textModulesData['field_6']",
                      },
                    ],
                  },
                },
              },
            },
          ],
        },
      },
    }
  }

  static getObject(id, classId, params) {
    const startDateTz = fromZonedTime(params.startDate, 'Europe/Kiev')
    const startDate = params.type === PassTypeEnum.TRANSPORT_SUBSCRIPTION
      ? format(startDateTz, dateFormat)
      : format(startDateTz, dateTimeFormat);

    const endDateTz = fromZonedTime(params.endDate, 'Europe/Kiev')
    const endDate = params.type === PassTypeEnum.TRANSPORT_SUBSCRIPTION
      ? format(endDateTz, dateFormat)
      : format(endDateTz, dateTimeFormat);

    return  {
      'id': id,
      'classId': classId,
      'state': 'ACTIVE',
      'heroImage': {
        'sourceUri': {
          'uri': 'https://i.ibb.co/QrsmLF6/wallet-bg.png'
        },
        'contentDescription': {
          'defaultValue': {
            'language': 'en-US',
            'value': 'Hero image description'
          }
        }
      },

      'textModulesData': [
        {
          "id": "field_1",
          "header": "Дійсний до",
          "body": endDate,
        },
        {
          "id": "field_2",
          "header": "Номер",
          "body": params.number,
        },
        {
          "id": "field_3",
          "header": "Дата придбання",
          "body":  startDate,
        },
        {
          "id": "field_4",
          "header": "Вартість",
          "body":  params.price + ' UAH',
        },
        {
          "id": "field_5",
          "header": "Організація",
          "body":  "КП Дніпровський електротранспорт ДМР",
        },
        {
          "id": "field_6",
          "header": "",
          "body": "",
        },
      ],
      // 'linksModuleData': {
      //   'uris': [
      //     {
      //       'uri': 'http://maps.google.com/',
      //       'description': 'Link module URI description',
      //       'id': 'LINK_MODULE_URI_ID'
      //     },
      //     {
      //       'uri': 'tel:6505555555',
      //       'description': 'Link module tel description',
      //       'id': 'LINK_MODULE_TEL_ID'
      //     }
      //   ]
      // },
      // 'imageModulesData': [
      //   {
      //     'mainImage': {
      //       'sourceUri': {
      //         'uri': 'https://drive.google.com/u/0/drive-viewer/AKGpihbZ4_nJUQ_JIEBKYoynF5o-oOuhBJz0FM5p6OgMx-B8KX5l3VjvcIruwWCw6dhNjL28141krvN_EqWbGyfymMT9w2H3y8KWc2c=s2560'
      //       },
      //       'contentDescription': {
      //         'defaultValue': {
      //           'language': 'en-US',
      //           'value': 'Image module description'
      //         }
      //       }
      //     },
      //     'id': 'IMAGE_MODULE_ID'
      //   }
      // ],
      'cardTitle': {
        'defaultValue': {
          'language': 'en-US',
          'value': 'Проїзний'
        }
      },
      'header': {
        'defaultValue': {
          'language': 'en-US',
          'value': params.typeName,
        }
      },
      'hexBackgroundColor': '#1E3A88',
      'logo': {
        'sourceUri': {
          'uri': 'https://i.ibb.co/9q2cKyp/e-Dnipro-logo.png'
        },
        'contentDescription': {
          'defaultValue': {
            'language': 'en-US',
            'value': 'eDnipro'
          }
        }
      }
    }
  }
}
