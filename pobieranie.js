const exampleData = 
{
  grant_type: 'password',
  username: 'testowy@gmail.com',
  password: 'haslo',
  client_id: 'podaj_id',
  client_secret: 'secret'
};

const exampleHeaders = 
{
  'Content-Type': 'application/x-www-form-urlencoded'
};

const formData = new URLSearchParams();
for(const key in exampleData) 
{
  formData.append(key, exampleData[key]);
}


async function sendPostRequest(url) 
{
  try 
  {
    const response = await fetch(url, 
    {
      method: 'POST',
      headers: exampleHeaders,
      body: formData,
    });

    if (response.ok) 
    {
      const jsonResponse = await response.json();
	  const jsonString = JSON.stringify(jsonResponse);
	  console.log(JSON.stringify(jsonResponse));
      runtime.globalVars.LINK_jsonRequest = jsonString;
    } 
    else 
    {
      alert(`Error: ${response.status} - ${response.statusText}`);
    }
  } 
  catch (error) 
  {
    alert('Error:', error);
  }
}

const url = `przykladowy_link.pl`;
sendPostRequest(url);
