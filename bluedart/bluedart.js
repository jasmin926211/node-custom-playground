var soap = require('soap');
const contentTypeParser = require('content-type-parser');

const BLUEDART_URL = 'https://netconnect.bluedart.com/API-QA/Ver1.10/Demo/';

/**
 * Generate SOAP Request
 * @param {String} url - API URL (wsdl)
 * @param {Object} params - Required args, like profile,shipper
 * @param {String} action - Action URL
 * @param {String} functionName - Function name for get result back
 */
generateSOAPRequest = async (url, params, action, functionName) => {
  return new Promise((resolve, reject) => {
    try {
      var args = params;
      var wsdlOptions = {
        envelopeKey: 'env',
      };
      soap.createClient(url, wsdlOptions, function (err, client) {
        if (err) {
          console.log(err);
          reject(err.message);
        }
        client.addHttpHeader(
          'Content-Type',
          contentTypeParser(`application/soap+xml; charset=utf-8`)
        );
        client.addSoapHeader(function (methodName, args, headers, req) {
          return {
            'ns3:Action': action,
          };
          // or you can return "<MyHeader1>SomeValue</MyHeader1>"
        });
        client[functionName](args, function (err, result) {
          if (err) {
            reject(err);
          }
          resolve(result);
        });
      });
    } catch (err) {
      reject(err);
    }
  });
};

const blueDartProfile = {
  Api_type: 'S',
  LicenceKey: 'rpeguglsjgu62ptqotnhrmmiu1ptpjrn',
  LoginID: 'BDQ13175',
  Version: '1.10',
};

const args = {
  pinCode: '395007',
  profile: blueDartProfile,
};

const callMe = async () => {
  try {
    console.log('args:::', args);
    const pincodeResult = await generateSOAPRequest(
      BLUEDART_URL + 'ShippingAPI/Finder/ServiceFinderQuery.svc?wsdl',
      args,
      'http://tempuri.org/IServiceFinderQuery/GetServicesforPincode',
      'GetServicesforPincode'
    );

    console.log(pincodeResult);
  } catch (err) {
    console.log('err : ', err);
  }
};

const aa = callMe();
