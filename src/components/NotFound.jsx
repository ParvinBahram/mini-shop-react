import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h1 className="text-secondary my-15 font-bold">صفحه مورد نظر شما پیدا نشد</h1>
              <Link to="/" className="text-sm rounded-2xl text-primary bg-white font-bold p-2 hover:shadow hover:opacity-80">بازگشت به فروشگاه</Link>

    </div>
  )
}

