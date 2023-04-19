import RegisterCsvPage from "@/containers/RegisterCsvPage";
import Authentication from "@/helper/Authentication";

export default function RegisterCsv() {
  return <Authentication><RegisterCsvPage/></Authentication>
}