/*------------------------------------------------JS Calculator START-----------------------------------------------------*/
/*------------------------------------------------JS Calculator START-----------------------------------------------------*/
        prompt_msg=()=>
        {
            let pr=prompt("Please, Enter Your name: (Lucky) ","Laxmana Rao");
            if(pr!=null)
            {
                document.getElementById("content").innerHTML="Hello!"+" "+ pr+", " +"How are You Today?";
            }
        }
        let no= document.getElementById("text_area");
        function ac() 
        {
            document.getElementById("text_area").value="";
        }
        function delete_val()
        {
            let a=document.getElementById("text_area");
            if(a.value=="undefined" )
            {
                a.value="0";
            }
            a.value=a.value.slice(0,-1);
        }
        function equalto()
        {
            let b=document.getElementById("text_area");
            try
            {
                document.getElementById("text_area").value=eval(document.getElementById("text_area").value);
            }
            catch(err)
            {
                alert("I am Sorry! You Entered Invalid Syntax");
            }
        }
        function disp(input_val)
        {
            let no=document.getElementById("text_area");
            if(true)
            {  
                document.getElementById("text_area").value+=input_val;
            }
        }
        /*------------------------------------------------JS Calculator END-----------------------------------------------------*/
        /*------------------------------------------------JS Calculator END-----------------------------------------------------*/

        /*------------------------------------------------JS Exchange Rate start-------------------------------------------------*/
        /*------------------------------------------------JS Exchange Rate start-------------------------------------------------*/
        function display(val)
        {
            if(document.getElementById("text_area2").innerHTML=="0")
            {
                document.getElementById("text_area2").innerHTML="";
            }
            document.getElementById("text_area2").innerHTML+=val;

            let obj=document.getElementById("slct_countries");
            let ind=obj.options[obj.selectedIndex].value;
            let exc_val=document.getElementById("text_area2");
            if(ind=="Algerian")
            {
                let rs=Number(exc_val.innerHTML)*0.534;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Argentine")
            {
                let rs=Number(exc_val.innerHTML)*0.6424;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Us-Dollar-Usd")
            {
                let rs=Number(exc_val.innerHTML)*78.12;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Australian")
            {
                let rs=Number(exc_val.innerHTML)*54.567;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Bangladesh")
            {
                let rs=Number(exc_val.innerHTML)*0.8318;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Bahrain")
            {
                let rs=Number(exc_val.innerHTML)*207.0343;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Brazilian")
            {
                let rs=Number(exc_val.innerHTML)*15.2914;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Bulgarian")
            {
                let rs=Number(exc_val.innerHTML)*41.666;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Combodian")
            {
                let rs=Number(exc_val.innerHTML)*0.0192;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Canadian")
            {
                let rs=Number(exc_val.innerHTML)*60.7048;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Chilean")
            {
                let rs=Number(exc_val.innerHTML)*0.0906;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Chinese")
            {
                let rs=Number(exc_val.innerHTML)*11.5623;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Colombian")
            {
                let rs=Number(exc_val.innerHTML)*0.0195;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Egyptian")
            {
                let rs=Number(exc_val.innerHTML)*4.1742;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Hong Kong Dollar")
            {
                let rs=Number(exc_val.innerHTML)*9.949;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="India")
            {
                let rs=Number(exc_val.innerHTML)*1;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Indonesian")
            {
                let rs=Number(exc_val.innerHTML)*0.0053;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Japanese")
            {
                let rs=Number(exc_val.innerHTML)*0.582;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Kenya")
            {
                let rs=Number(exc_val.innerHTML)*0.6664;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Malaysian")
            {
                let rs=Number(exc_val.innerHTML)*17.6758;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="New Zealand")
            {
                let rs=Number(exc_val.innerHTML)*48.9925;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Pakisthan")
            {
                let rs=Number(exc_val.innerHTML)*0.3824;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Singapore")
            {
                let rs=Number(exc_val.innerHTML)*56.0758;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="South African")
            {
                let rs=Number(exc_val.innerHTML)*4.8489;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Sri Lanka")
            {
                let rs=Number(exc_val.innerHTML)*0.217;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="UAE")
            {
                let rs=Number(exc_val.innerHTML)*21.2629;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Uganda")
            {
                let rs=Number(exc_val.innerHTML)*0.0209;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Uzbekistani")
            {
                let rs=Number(exc_val.innerHTML)*0.0071;
                document.getElementById("text_area3").innerHTML=rs;
            }
        }
        function c() 
        {
            document.getElementById("text_area2").innerHTML="0";
            if(document.getElementById("text_area2").innerHTML=="0")
            {
                document.getElementById("text_area3").innerHTML="0";
            }
        }
        function delete_value()
        {
            let a=document.getElementById("text_area2");
            a.innerHTML=a.innerHTML.slice(0,-1);
            if(a.innerHTML=="")
            {
                a.innerHTML="0";
                document.getElementById("text_area3").innerHTML="0";
            }

            let obj=document.getElementById("slct_countries");
            let ind=obj.options[obj.selectedIndex].value;
            let exc_val=document.getElementById("text_area2");
            if(ind=="Algerian")
            {
                let rs=Number(exc_val.innerHTML)*0.534;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Argentine")
            {
                let rs=Number(exc_val.innerHTML)*0.6424;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Us-Dollar-Usd")
            {
                let rs=Number(exc_val.innerHTML)*78.12;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Australian")
            {
                let rs=Number(exc_val.innerHTML)*54.567;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Bangladesh")
            {
                let rs=Number(exc_val.innerHTML)*0.8318;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Bahrain")
            {
                let rs=Number(exc_val.innerHTML)*207.0343;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Brazilian")
            {
                let rs=Number(exc_val.innerHTML)*15.2914;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Bulgarian")
            {
                let rs=Number(exc_val.innerHTML)*41.666;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Combodian")
            {
                let rs=Number(exc_val.innerHTML)*0.0192;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Canadian")
            {
                let rs=Number(exc_val.innerHTML)*60.7048;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Chilean")
            {
                let rs=Number(exc_val.innerHTML)*0.0906;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Chinese")
            {
                let rs=Number(exc_val.innerHTML)*11.5623;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Colombian")
            {
                let rs=Number(exc_val.innerHTML)*0.0195;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Egyptian")
            {
                let rs=Number(exc_val.innerHTML)*4.1742;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Hong Kong Dollar")
            {
                let rs=Number(exc_val.innerHTML)*9.949;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="India")
            {
                let rs=Number(exc_val.innerHTML)*1;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Indonesian")
            {
                let rs=Number(exc_val.innerHTML)*0.0053;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Japanese")
            {
                let rs=Number(exc_val.innerHTML)*0.582;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Kenya")
            {
                let rs=Number(exc_val.innerHTML)*0.6664;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Malaysian")
            {
                let rs=Number(exc_val.innerHTML)*17.6758;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="New Zealand")
            {
                let rs=Number(exc_val.innerHTML)*48.9925;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Pakisthan")
            {
                let rs=Number(exc_val.innerHTML)*0.3824;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Singapore")
            {
                let rs=Number(exc_val.innerHTML)*56.0758;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="South African")
            {
                let rs=Number(exc_val.innerHTML)*4.8489;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Sri Lanka")
            {
                let rs=Number(exc_val.innerHTML)*0.217;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="UAE")
            {
                let rs=Number(exc_val.innerHTML)*21.2629;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Uganda")
            {
                let rs=Number(exc_val.innerHTML)*0.0209;
                document.getElementById("text_area3").innerHTML=rs;
            }
            else if(ind=="Uzbekistani")
            {
                let rs=Number(exc_val.innerHTML)*0.0071;
                document.getElementById("text_area3").innerHTML=rs;
            }
        }
        /*------------------------------------------------JS Exchange Rate END-------------------------------------------------*/
        /*------------------------------------------------JS Exchange Rate END-------------------------------------------------*/