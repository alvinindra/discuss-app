import AuthContainer from '@/components/Auth/AuthContainer'
import FormRegister from '@/components/Auth/FormRegister/FormRegister'

export default function RegisterPage() {
  return <AuthContainer formAuth={<FormRegister />} />
}
