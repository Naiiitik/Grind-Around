a1 = document.querySelector('.lis');
b1 = document.querySelector('.but')
c1 = document.querySelector('.finance')
c2 = document.querySelector('.fitness')
c3 = document.querySelector('.study')
d1 = document.querySelector('.timeline')
var dis1 = 0;
var dis2 = 0;
var dis3 = 0;
var dis4 = 0;
a1.style.display = "none";
c1.style.display = "none";
c2.style.display = "none";
c3.style.display = "none";
b1.innerHTML = "Choose the Goal";
function butt() {
    if (dis1==0) {
        a1.style.display = "block";
        dis1=1;
    }
    else {
        a1.style.display= "none";
        dis1 = 0;
    }

}



if (localStorage.getItem('code')!= null){
    d1.innerHTML= localStorage.getItem('code');
    b1.innerText="Change Your Goals"
}

function here() {
    console.log(event.target.innerText)
    b1.textContent = event.target.textContent;
    a1.style.display= "none";
    dis1 = 0;

    if (event.target.innerText == 'Financial Goals') {

        c2.style.display = 'none';
        c1.style.display = 'block';

        dis2=1;
        localStorage.setItem('code',`<div class="finance">
            <div class="timeline"> 
                <div class="container left-container">
                    <div class="text-box">
                        <h2>Choose How You want to make the money!</h2>
                        <p class="texting">This includes both online and offline. You can use Chat GPT and Google to get some ideas. This should also include if you want to do a business of selling things or service. Also be more specific in deciding the service or product you want to sell</p>
                        <span class="left-arrow"></span>
                    </div>
                </div> 
                
                <div class="container right-container">
                    <div class="text-box">
                        <h2>Find your target audience</h2>
                        <p class="texting">Now since you have found how to make money, it is time to find the target audience that you need to sell the service or product, They can be your friends, your relatives, shopkeepers or anyone. They just must be having some relation with the product. </p>
                        <span class="right-arrow"></span>
                    </div>
                </div>

                <div class="container left-container">
                    <div class="text-box">
                        <h2>Approaching Time!</h2>
                        <p class="texting">It is time you start approching the the clients. It can be done either by going personally to meet them and have a talk regarding the product or you can give call them online to have the talks. You must not hurry to be selling products. There  can be times when the clinets will reject you but don't discourage yourself and you will surely succeed.</p>
                        <span class="left-arrow"></span>
                    </div>
                </div>

                <div class="container right-container">
                    <div class="text-box">
                        <h2>Doing Work for First customer</h2>
                        <p class="texting">Congrats! You  have signed in your first customer. Now it is time you fulfill their needs so that you have a good impression on them and you can get a good rating. Remember the work must be timely done and must be as neat as possible. </p>
                        <span class="right-arrow"></span>
                    </div>
                </div>

                <div class="container left-container">
                    <div class="text-box">
                        <h2>Keep Going</h2>
                        <p class="texting">Now since you have got some experience in the agency and the business, it is time you start approaching more. This is the way you will earn more money and soon will surely succeed in it. You must also trying doing experiments with other services and products to get more stability.</p>
                        <span class="left-arrow"></span>
                    </div>
                </div>
            </div>
        </div>`)
    }

    if (event.target.innerText == 'Fitness Goals') {
        c2.style.display = 'block';
        dis3=1;
        // c4.style.display = 'none';
        c2.style.display = 'none';
        localStorage.setItem('code', `<div class="fitness">
                        <div class="container left-container">
                            <div class="text-box">
                                <h2>Decide what achievement will make you feel and look fit</h2>
                                <p class="texting">This includes both weight and physical look. Some people just want to lose weight while others want to develop muscles and many more features to appear good and cool. So, have a clear mindset in your mind</p>
                                <span class="left-arrow"></span>
                            </div>
                        </div> 
                        
                        <div class="container right-container">
                            <div class="text-box">
                                <h2>Don't be in Hurry!</h2>
                                <p class="texting">Always remember that the good things always take time to be completed. Similary don't think that You will be able to do it in just 1 day. It can take upto 6-8 months to completely achieve it. Never lose hope or motivation and never ever give up from your dreams </p>
                                <span class="right-arrow"></span>
                            </div>
                        </div>

                        <div class="container left-container">
                            <div class="text-box">
                                <h2>Divide Goals into simpler terms</h2>
                                <p class="texting">Normally we make goals like I will lose 20kg in 1 year. But this approach of making plans and goals will never make it achieve it bacause we can't get motivation to do it for an entire year. Instead divide it in parts like go to gym for 7 days consistently. This way, the results are confirmed and we can do the work easily.</p>
                                <span class="left-arrow"></span>
                            </div>
                        </div>

                        <div class="container right-container">
                            <div class="text-box">
                                <h2>Diet</h2>
                                <p class="texting">Now since you are going to gym and doing fitness activities everyday, it is time you start focussing on your diet too. It must include a lot of carbohydrates and proteins. Waking up, you should drink at least 1 liter of water. Eat a lot of healthy food and trust the process. </p>
                                <span class="right-arrow"></span>
                            </div>
                        </div>

                        <div class="container left-container">
                            <div class="text-box">
                                <h2>Track Your Progress</h2>
                                <p class="texting">It is very important to track your progress. This can include weighing your weight regularly, measuring your size and clicking your photos regularly. This tracking will give you motivation to do more. It will help you compare your previous yourself with new one!</p>
                                <span class="left-arrow"></span>
                            </div>
                        </div>
                    </div>
                 </div>`)
    }

    if (event.target.innerText == 'Study Goals') {
        c3.style.display = "block"
        c2.style.display = 'none';
        c1.style.display = 'none';

        dis2=1;
        localStorage.setItem('code',`<div class="study">
                        <div class="container left-container">
                            <div class="text-box">
                                <h2>Decide what marks do you want to achieve</h2>
                                <p class="texting">Make sure the marks you want are not so high that you will feel that it can't be achieved amd simply give up.</p>
                                <span class="left-arrow"></span>
                            </div>
                        </div> 
                        
                        <div class="container right-container">
                            <div class="text-box">
                                <h2>Analyze your previos mistakes</h2>
                                <p class="texting">There is a very famous saying that a mistake should not be done twice. A lot of times we tend to do the same mistakes over and over again. Thus we should check our errors and try to learn from them rather than sob about it.</p>
                                <span class="right-arrow"></span>
                            </div>
                        </div>

                        <div class="container left-container">
                            <div class="text-box">
                                <h2>Make a Study Schedule</h2>
                                <p class="texting">I know it is borring to hear again and again but it is reality. When we make a study schedule, we tend to follow it and we usually don't waste any time watching bing shows on Netflix and stuffs like that. So go and make a proper schedule of your study routine and follow it sincerely.</p>
                                <span class="left-arrow"></span>
                            </div>
                        </div>

                        <div class="container right-container">
                            <div class="text-box">
                                <h2>Invest to get in return</h2>
                                <p class="texting">As a human being we don't focus much on things that we get for free, instead we tend to focus more on things that we pay money for and thus value them only. Thus you can also follow this trick in your studies. You can take out some money from your piggy bank and give it someone you know. You can get the money back only if you have completed your studies or else the person you gave will keep the money forever. </p>
                                <span class="right-arrow"></span>
                            </div>
                        </div>

                        <div class="container left-container">
                            <div class="text-box">
                                <h2>Healthy Diet!</h2>
                                <p class="texting">Along with study techniques, you also need to maintain a healthy diet. This will include eating homemade food and avoiding junks as much as possible. Also focus on your sleep too</p>
                                <span class="left-arrow"></span>
                            </div>
                        </div>
                    </div>`)
    }

    location.reload();
}
