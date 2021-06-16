function tab(){

    var table = document.getElementById("casewise_table");
  
    //Header Row

    var header = table.createTHead();
    var row = header.insertRow(0);
    row.id = "report1_headerrow";
  
    var th = document.createElement('th');
    th.innerHTML = "S NO.";
    row.appendChild(th);

    var th = document.createElement('th');
    th.innerHTML = "DISTRICT";
    row.appendChild(th);

    var th = document.createElement('th');
    th.innerHTML = "POLICE STATION";
    row.appendChild(th);

    var th = document.createElement('th');
    th.innerHTML = "FIR NUMBER";
    row.appendChild(th);

    var th = document.createElement('th');
    th.innerHTML = "REPORTED DATE";
    row.appendChild(th);
  
    var th = document.createElement('th');
    th.innerHTML = "DURATION 1";
    row.appendChild(th);

    var th = document.createElement('th');
    th.innerHTML = "DURATION 2";
    row.appendChild(th);

    var th = document.createElement('th');
    th.innerHTML = "DURATION 3";
    row.appendChild(th);
  
    
  var records = [{"district_name":"district1","ps_name":"ps1","fir_no":"1234567","receive_ps_dt":"2021-01-01","milestone":23},
  {"district_name":"district2","ps_name":"ps2","fir_no":"1239890","receive_ps_dt":"2021-02-01","milestone":32},
  {"district_name":"district3","ps_name":"ps3","fir_no":"1234567","receive_ps_dt":"2021-03-01","milestone":45},
  {"district_name":"district4","ps_name":"ps1","fir_no":"1234567","receive_ps_dt":"2021-01-01","milestone":23},
  {"district_name":"district5","ps_name":"ps2","fir_no":"1239890","receive_ps_dt":"2021-02-01","milestone":32},
  {"district_name":"district6","ps_name":"ps3","fir_no":"1234567","receive_ps_dt":"2021-03-01","milestone":45},
  {"district_name":"district7","ps_name":"ps1","fir_no":"1234567","receive_ps_dt":"2021-01-01","milestone":23},
  {"district_name":"district8","ps_name":"ps2","fir_no":"1239890","receive_ps_dt":"2021-02-01","milestone":32},
  {"district_name":"district9","ps_name":"ps3","fir_no":"1234567","receive_ps_dt":"2021-03-01","milestone":45},
  {"district_name":"district10","ps_name":"ps1","fir_no":"1234567","receive_ps_dt":"2021-01-01","milestone":23},
  {"district_name":"district11","ps_name":"ps2","fir_no":"1239890","receive_ps_dt":"2021-02-01","milestone":32},
  {"district_name":"district12","ps_name":"ps3","fir_no":"1234567","receive_ps_dt":"2021-03-01","milestone":45},
  {"district_name":"district13","ps_name":"ps1","fir_no":"1234567","receive_ps_dt":"2021-01-01","milestone":23},
  {"district_name":"district14","ps_name":"ps2","fir_no":"1239890","receive_ps_dt":"2021-02-01","milestone":32},
  {"district_name":"district15","ps_name":"ps3","fir_no":"1234567","receive_ps_dt":"2021-03-01","milestone":45},
  {"district_name":"district16","ps_name":"ps1","fir_no":"1234567","receive_ps_dt":"2021-01-01","milestone":23},
  {"district_name":"district17","ps_name":"ps2","fir_no":"1239890","receive_ps_dt":"2021-02-01","milestone":32},
  {"district_name":"district18","ps_name":"ps3","fir_no":"1234567","receive_ps_dt":"2021-03-01","milestone":45}];
     
      
  var body = table.createTBody();

  var tem=0;//temperory variable
    
  for (var i = 0; i < records.length; i++)
  {
  
    var row = body.insertRow(tem);

    var cell = row.insertCell(0);
    cell.innerHTML = i+1;

    var cell = row.insertCell(1);
    cell.innerHTML = records[i].district_name;

    var cell = row.insertCell(2);
    cell.innerHTML = records[i].ps_name;

    var cell = row.insertCell(3);
    cell.innerHTML = records[i].fir_no;    

    var cell = row.insertCell(4);
    cell.innerHTML = records[i].receive_ps_dt;

    var cell = row.insertCell(5);
    cell.innerHTML = records[i].milestone;
    
    var cell = row.insertCell(6);
    cell.innerHTML = records[i].milestone;
    
    var cell = row.insertCell(7);
    cell.innerHTML = records[i].milestone;

    tem=tem+1;
      
     
  } 
    
    
}
    
    