import AuthContainer from '@/components/Auth/AuthContainer'
import FormLogin from '@/components/Auth/FormLogin/FormLogin'

export default function LoginPage() {
  return <AuthContainer formAuth={<FormLogin />} />
}
