import { Link } from 'react-router-dom'

export default function OrderSuccess(){
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 text-center">
      <div className="card p-10">
        <div className="text-5xl">✅</div>
        <h1 className="mt-4 text-3xl font-black">Order Successful</h1>
        <p className="mt-2 text-slate-600">Invoice প্রদান করা হবে।</p>
        <Link to="/" className="mt-6 btn-primary">Home</Link>
      </div>
    </main>
  )
}
