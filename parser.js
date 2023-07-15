function getUserIdFromToken(token) 
{
  const [header, payload, signature] = token.split('.');
  
  const decodedPayload = atob(payload);
  
  const { user_id } = JSON.parse(decodedPayload);
  
  return user_id;
}

const token = runtime.globalVars["LINK_accessToken"]
const userId = getUserIdFromToken(token);
runtime.globalVars["LINK_gameId"] = userId;
