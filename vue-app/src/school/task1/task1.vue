<template>
    <div>
        <h1>Task 1</h1>
        <div id="demo__div">
            <p id="demo">Demo</p>
            <button>Run Demo</button>
            <div class="demo__console">
                <tab-task1-demo></tab-task1-demo>
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
    height: 300px;
    border: solid lightgray 1px;
    background: black;
}
</style>

<script>
export default {
    data(){
        return{
            returnTest: 1
        }
    },
    
    methods:{

    },
    created(){
        
    }
}
</script>
