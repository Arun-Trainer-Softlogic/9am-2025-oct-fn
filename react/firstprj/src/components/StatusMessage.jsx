

function StatusMessage({status}) {
    const renderMessage = () => {
        if(status === "loading" )return "Loading....";
        if(status === "success" )return "Data Loaded ";
        if(status === "error") return "Error occured"
        return "unknown Status"
    }

  return (
    <h2>{renderMessage()}</h2>
  )
}

export default StatusMessage