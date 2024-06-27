import { Check } from "lucide-react";
import processImage from '../assets/process.jpg';



export default function TmPrice() {

  return (

    <div >
      <div className="p-3 mb-48 bg-body-tertiary rounded-3 text-center">
        <div className="container py-5">
          <h1 className="display-5 fw-bold">비용 안내</h1>
          <p className="fs-4">Using a series of utilities, you can create this jumbotron, you can remix and restyle it to your liking.</p>
        </div>
      </div>

      <div className="flex item-center justify-center mb-48">
        <div className="w-full max-w-[60vw]">
          <h2 className="text-4xl text-center mb-8">서비스 안내</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-center">
            <div className="col">
              <div className="mb-4 rounded-lg shadow-sm">
                <div className="py-3 bg-gray-100 rounded-t-lg">
                  <h4 className="my-0 font-normal">Free</h4>
                </div>
                <div className="p-6 bg-white rounded-b-lg">
                  <h1 className="text-4xl font-bold mb-3">$0<small className="text-gray-500 font-light">/mo</small></h1>
                  <ul className="list-none mt-3 mb-4 space-y-2">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" className="w-full py-2 px-4 text-lg text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition">
                    Sign up for free
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="mb-4 rounded-lg shadow-sm">
                <div className="py-3 bg-gray-100 rounded-t-lg">
                  <h4 className="my-0 font-normal">Pro</h4>
                </div>
                <div className="p-6 bg-white rounded-b-lg">
                  <h1 className="text-4xl font-bold mb-3">$15<small className="text-gray-500 font-light">/mo</small></h1>
                  <ul className="list-none mt-3 mb-4 space-y-2">
                    <li>20 users included</li>
                    <li>10 GB of storage</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" className="w-full py-2 px-4 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition">
                    Get started
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="mb-4 rounded-lg shadow-sm border border-primary">
                <div className="py-3 bg-blue-500 text-white rounded-t-lg">
                  <h4 className="my-0 font-normal">Enterprise</h4>
                </div>
                <div className="p-6 bg-white rounded-b-lg">
                  <h1 className="text-4xl font-bold mb-3">$29<small className="text-gray-500 font-light">/mo</small></h1>
                  <ul className="list-none mt-3 mb-4 space-y-2">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" className="w-full py-2 px-4 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition">
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex item-center justify-center mb-48">
        <div className="w-full max-w-[60vw]">
          <h2 className="text-4xl text-center mb-8">서비스 내용 비교</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white text-center">
              <thead>
                <tr className="border-b">
                  <th className="w-1/4"></th>
                  <th className="w-1/6 pb-2">Free</th>
                  <th className="w-1/6 pb-2">Pro</th>
                  <th className="w-1/6 pb-2">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b ">
                  <th className="text-left px-4 py-2.5">Public</th>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                </tr>
                <tr className="border-b ">
                  <th className="text-left px-4 py-2.5">Private</th>
                  <td></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                </tr>
                <tr className="border-b ">
                  <th className="text-left px-4 py-2.5">Permissions</th>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                </tr>
                <tr className="border-b ">
                  <th className="text-left px-4 py-2.5">Sharing</th>
                  <td></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                </tr>
                <tr className="border-b ">
                  <th className="text-left px-4 py-2.5">Unlimited members</th>
                  <td></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                </tr>
                <tr className="border-b ">
                  <th className="text-left px-4 py-2.5">Extra security</th>
                  <td></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex item-center justify-center mb-48">
        <div className="w-full max-w-[60vw]">
          <h2 className="text-4xl text-center mb-8">상표등록 상세절차</h2>
          <div className="overflow-x-auto">
            <img src={processImage} alt="process image" />
          </div>
        </div>
      </div>

      <div className="flex item-center justify-center mb-48">
        <div className="w-full max-w-[60vw]">
          <h2 className="text-4xl text-center mb-8">절차별 상세비용</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white text-center">
              <thead>
                <tr className="border-b">
                  <th className="w-1/4"></th>
                  <th className="w-1/6 pb-2">Free</th>
                  <th className="w-1/6 pb-2">Pro</th>
                  <th className="w-1/6 pb-2">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b ">
                  <th className="text-left px-4 py-2.5">Public</th>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                </tr>
                <tr className="border-b ">
                  <th className="text-left px-4 py-2.5">Private</th>
                  <td></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                </tr>
                <tr className="border-b ">
                  <th className="text-left px-4 py-2.5">Permissions</th>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                </tr>
                <tr className="border-b ">
                  <th className="text-left px-4 py-2.5">Sharing</th>
                  <td></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                </tr>
                <tr className="border-b ">
                  <th className="text-left px-4 py-2.5">Unlimited members</th>
                  <td></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                </tr>
                <tr className="border-b ">
                  <th className="text-left px-4 py-2.5">Extra security</th>
                  <td></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                  <td><Check className="inline w-6 h-6 text-green-500"/></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
