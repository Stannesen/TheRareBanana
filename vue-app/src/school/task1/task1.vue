<template>
    <div>
        <h1>Task 1</h1>
        <div id="demo__div">
            <p id="demo">Demo</p>
            
            <div class="demo__console">
                <tab-task1-demo 
                    :msg="childData" 
                    :func="sendFunction" 
                    :task="task1" 
                    :inputNeeded="inputNeeded" 
                    :demoStart="demoStartText"
                    ></tab-task1-demo>
            </div>
        </div>
        <div>
            <p id="a">A: Create a program that prints 'Hey'</p>
            <pre>
                <code>
<span style="color:#0000ff;">static</span> <span style="color:#0000ff;">void</span> A()
{
    print(<span style="color:#a31515;">"Starting Task 1A"</span>);
    print(<span style="color:#a31515;">"Printing Hey"</span>);
    Console.WriteLine(<span style="color:#a31515;">"Hey"</span>);

    reset();
}
                </code>
            </pre>

            <pre>
                <code>
<span style="color:#0000ff;">static</span> <span style="color:#0000ff;">void</span> print(<span style="color:#0000ff;">string</span> text)
{
    Console.Write(text);
    <span style="color:#0000ff;">for</span> (<span style="color:#0000ff;">int</span> i = 0; i &lt; 3; i++)
    {
        Console.Write(<span style="color:#a31515;">"."</span>);

        Thread.Sleep(1000);
    }
    Console.WriteLine(<span style="color:#a31515;">"."</span>);
}
                </code>
            </pre>
        </div>

        <div>
            <p id="b">B: Write a program that summarizes 3 integer variables.</p>

            <pre>
                <code>
<span style="color:#0000ff;">static</span> <span style="color:#0000ff;">void</span> B()
{
    print(<span style="color:#a31515;">"Starting Task 1B"</span>);
    Console.WriteLine(<span style="color:#a31515;">"Enter 3 numbers and they will be summed up"</span>);

    <span style="color:#0000ff;">var</span> numbers = <span style="color:#0000ff;">new</span> List&lt;<span style="color:#0000ff;">int</span>&gt;();
    numbers.Clear();
    <span style="color:#0000ff;">for</span>(<span style="color:#0000ff;">int</span> i = 0; i &lt; 3; i++)
    {
        Console.WriteLine(<span style="color:#a31515;">"Please enter number "</span> + (i+1));

        <span style="color:#0000ff;">while</span> (<span style="color:#0000ff;">true</span>)
        {
            <span style="color:#0000ff;">string</span> sumHelp = Console.ReadLine();
            

            <span style="color:#0000ff;">int</span> j;
            <span style="color:#0000ff;">if</span> (Int32.TryParse(sumHelp, <span style="color:#0000ff;">out</span> j))
            {
                numbers.Add(j);
                <span style="color:#0000ff;">break</span>;  
            }
            <span style="color:#0000ff;">else</span>
                Console.WriteLine(<span style="color:#a31515;">"Please enter a number"</span>);
        }
    }

    <span style="color:#0000ff;">int</span> total = numbers.Sum();

    <span style="color:#0000ff;">for</span>(<span style="color:#0000ff;">int</span> i = 0; i &lt; numbers.Count; i++)
    {
        <span style="color:#0000ff;">if</span>(i + 1 == numbers.Count)
        {
            Console.Write(numbers[i]);
        }
        <span style="color:#0000ff;">else</span>
        {
            Console.Write(numbers[i] + <span style="color:#a31515;">" + "</span>);
        }
    }

    Console.WriteLine(<span style="color:#a31515;">" = "</span> + total);
    reset();
}
                </code>
            </pre>
        </div>

        <div>
            <p id="c">C: Write a program that calculates the area of a square</p>

            <pre>
                <code>
<span style="color:#0000ff;">static</span> <span style="color:#0000ff;">void</span> C()
{
    print(<span style="color:#a31515;">"Starting Task 1C"</span>);
    Console.WriteLine(<span style="color:#a31515;">"Please enter the length in Metre"</span>);

    <span style="color:#0000ff;">int</span> length = 0;
    <span style="color:#0000ff;">string</span> input = Console.ReadLine();
    <span style="color:#0000ff;">while</span> (<span style="color:#0000ff;">true</span>)
    {
        <span style="color:#0000ff;">if</span> (Int32.TryParse(input, <span style="color:#0000ff;">out</span> length))
        {
            <span style="color:#0000ff;">break</span>;
        }
        <span style="color:#0000ff;">else</span>
            Console.WriteLine(<span style="color:#a31515;">"Please enter a number"</span>);
    }

    Console.WriteLine(<span style="color:#a31515;">"The area of a square whit a lenght of "</span> + length + <span style="color:#a31515;">" M, is: "</span> + length * length + <span style="color:#a31515;">" M"</span>);
    

    reset();
}
                </code>
            </pre>
        </div>

        <tab-task1-code id="code" class="code"></tab-task1-code>

        <h1 id="test">Test</h1>
    </div>
</template>

<style lang="scss" scoped>

pre code {
  background-color: rgb(255, 255, 255);
  border: 1px solid #999;
  display: block;
  padding: 20px;
}


.code{
    border: solid black 1px;
}

.demo__console{
    width: 700px;
    height: 100%;
}
</style>

<script>
export default {
    data(){
        return{
            returnTest: 1,
            tempMessage: "",
            childData: "task1",
            demoStartText: "",
            demoText: "",
            inputNeeded: 0,
            inputHelp: [],
            reset: false,
            task1GInfo: {done: 0, value: ""},
            task1aInfo: {done: 0, value: ""},
            task1bInfo: {done: 0, value: ""},
            task1cInfo: {done: 0, value: ""}
        }
    },
    
    methods:{
        test(){
            this.tempMessage = "Hey";

            this.$emit("inputData", this.tempMessage);
            this.tempMessage = "";
        },

        sendFunction(){
            console.log("Function from task1");
        },

        task1Gblobal(){
            this.demoStartText = "Do you want to run A, B or C \n";

            this.inputNeeded = 1;
        },

        task1(option){
            console.log(option)

            if(option === "reset"){
                this.task1GInfo.value = ""; 
                console.log("Reseting from Task1");
                this.task1aInfo.done = 0;
                this.task1bInfo.done = 0;
                this.task1cInfo.done = 0;
                return "reset";

            }else if(option.toLowerCase() === "a" || this.task1GInfo.value === "a"){
            this.task1GInfo.value = "a";
            return this.task1a(option);

            }else if(option.toLowerCase() === "b" || this.task1GInfo.value === "b"){
                this.task1GInfo.value = "b";
                return this.task1b(option);

            }else if(option.toLowerCase() === "c" || this.task1GInfo.value === "c"){
                this.task1GInfo.value = "c";
                return this.task1c(option);

            }else{
                return {text: "Please enter A, B or C", valid: false, reset: false};
            }
        },
        task1a(){
            console.log("Runing task1a Func");
            this.demoText = "";
            this.demoText += "Starting Task 1A \n";
            this.demoText += 'Priting "Hey" \n';
            this.demoText += "Hey \n";

            return {text: this.demoText, valid: true, repeat: false};
        },
        task1b(option){
            if(this.task1bInfo.done === 0){
                this.demoText = "";
                this.demoText += "Starting Taks 1B \n"
                this.demoText += "Enter 3 numbers and they will be summed up \n";
                this.demoText += "Please enter a number " + (this.task1bInfo.done + 1);
                this.task1bInfo.done += 1;
                return {text: this.demoText, valid: true, repeat: true};

            }else if(this.task1bInfo.done === 6){
                this.demoText = "done \n";
                return {text: this.demoText, valid: true, repeat: false};

            }else{
                this.demoText = "Please enter a number " + (this.task1bInfo.done + 1);
                this.inputHelp[this.task1bInfo.done - 1] = option;
                this.task1bInfo.done += 1;

                if(this.task1bInfo.done >= 4){
                    
                    var sumHelp = 0;
                    var sumTemp = 0;
                    for(var i = 0; i < this.inputHelp.length; i++){
                        sumTemp = parseInt(this.inputHelp[i]);
                        sumHelp += sumTemp;
                    }   

                    this.demoText = "Total Sum: " + sumHelp;

                    return {text: this.demoText, valid: true, repeat: false};

                }else{

                    return {text: this.demoText, valid: true, repeat: true};
                }
            }

            if(this.task1bInfo.done === 2){
                console.log("done");
            }
        },

        task1c(option){
            console.log(option);

            var optionInt = parseInt(option);

            if(this.task1cInfo.done === 0){
                this.demoText = "Starting Task 1C \n";
                this.demoText += "Please enter the length in Metre";
                
                this.task1cInfo.done += 1;

                return {text: this.demoText, valid: true, repeat: true};

            }else{
                console.log("Number is a int: " + Number.isInteger(optionInt));
                console.log("Number: " + optionInt);
                if(Number.isInteger(optionInt) === true){
                    console.log("Int");
                    this.demoText = "The area of a square with a length of " + 
                        optionInt + " M, is: " + (optionInt * optionInt) + " M";
                    return {text: this.demoText, valid: true, repeat: false};

                }else{
                    return {text: "Please enter a number", valid: false, repeat: true};

                }        
            }   
        }
    },
    created(){
        this.task1Gblobal();
    }
}
</script>
