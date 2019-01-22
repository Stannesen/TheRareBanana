<template>
    <pre style="margin:0em; overflow:auto; background-color:#ffffff;"><code style="font-family:Consolas,&quot;Courier New&quot;,Courier,Monospace; font-size:10pt; color:#000000;"><span style="color:#0000ff;">using</span> System;
    <span style="color:#0000ff;">using</span> System.Collections.Generic;
    <span style="color:#0000ff;">using</span> System.Linq;
    <span style="color:#0000ff;">using</span> System.Text;
    <span style="color:#0000ff;">using</span> System.Threading;
    <span style="color:#0000ff;">using</span> System.Threading.Tasks;
    
    <span style="color:#0000ff;">namespace</span> Task1
    {
        <span style="color:#0000ff;">class</span> Program
        {
            <span style="color:#0000ff;">public</span> <span style="color:#0000ff;">static</span> <span style="color:#0000ff;">bool</span> loop = <span style="color:#0000ff;">true</span>;
    
            <span style="color:#0000ff;">static</span> <span style="color:#0000ff;">void</span> Main(<span style="color:#0000ff;">string</span>[] args)
            {
                Console.WriteLine(<span style="color:#a31515;">"Thank you for using my program :)"</span>);
                Console.WriteLine(<span style="color:#a31515;">"If you want to know how it works please visit www.therarebanana.com/school"</span>);
                Console.WriteLine();
                Console.WriteLine(<span style="color:#a31515;">"---------------------------------"</span>);
                Console.WriteLine();
                Console.WriteLine(<span style="color:#a31515;">"Do you want to run A, B or C"</span>);
                <span style="color:#0000ff;">while</span> (loop == <span style="color:#0000ff;">true</span>)
                {
                    <span style="color:#0000ff;">string</span> ABC = Console.ReadLine().ToLower();
    
                    <span style="color:#0000ff;">switch</span> (ABC) {
                        <span style="color:#0000ff;">case</span> <span style="color:#a31515;">"a"</span>:
                            Console.WriteLine(<span style="color:#a31515;">"You choose A"</span>);
                            A();
                            <span style="color:#0000ff;">break</span>;
                        <span style="color:#0000ff;">case</span> <span style="color:#a31515;">"b"</span>:
                            Console.WriteLine(<span style="color:#a31515;">"You choose B"</span>);
                            B();
                            <span style="color:#0000ff;">break</span>;
                        <span style="color:#0000ff;">case</span> <span style="color:#a31515;">"c"</span>:
                            Console.WriteLine(<span style="color:#a31515;">"You choose C"</span>);
                            C();
                            <span style="color:#0000ff;">break</span>;
                        <span style="color:#0000ff;">default</span>:
                            Console.WriteLine(<span style="color:#a31515;">"Please enter A, B or C to continue"</span>);
                            <span style="color:#0000ff;">break</span>;
                    }
                }
            }
    
            <span style="color:#0000ff;">static</span> <span style="color:#0000ff;">void</span> A()
            {
                print(<span style="color:#a31515;">"Starting Task 1A"</span>);
                print(<span style="color:#a31515;">"Printing Hey"</span>);
                Console.WriteLine(<span style="color:#a31515;">"Hey"</span>);
    
                reset();
            }
    
    
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
    
            <span style="color:#0000ff;">static</span> <span style="color:#0000ff;">void</span> reset()
            {
                Console.WriteLine(<span style="color:#a31515;">"Do you want to run the program again?"</span>);
    
                <span style="color:#0000ff;">bool</span> stopLoop = <span style="color:#0000ff;">false</span>;
    
                <span style="color:#0000ff;">while</span> (stopLoop == <span style="color:#0000ff;">false</span>)
                {
                    <span style="color:#0000ff;">string</span> reset = Console.ReadLine().ToLower();
    
                    <span style="color:#0000ff;">switch</span> (reset)
                    {
                        <span style="color:#0000ff;">case</span> <span style="color:#a31515;">"yes"</span>:
                            loop = <span style="color:#0000ff;">true</span>;
                            print(<span style="color:#a31515;">"Resetting"</span>);
                            stopLoop = <span style="color:#0000ff;">true</span>;
                            <span style="color:#0000ff;">break</span>;
                        <span style="color:#0000ff;">case</span> <span style="color:#a31515;">"yea"</span>:
                            loop = <span style="color:#0000ff;">true</span>;
                            print(<span style="color:#a31515;">"Resetting"</span>);
                            stopLoop = <span style="color:#0000ff;">true</span>;
                            <span style="color:#0000ff;">break</span>;
                        <span style="color:#0000ff;">case</span> <span style="color:#a31515;">"ja"</span>:
                            loop = <span style="color:#0000ff;">true</span>;
                            print(<span style="color:#a31515;">"Resetting"</span>);
                            stopLoop = <span style="color:#0000ff;">true</span>;
                            <span style="color:#0000ff;">break</span>;
                        <span style="color:#0000ff;">case</span> <span style="color:#a31515;">"no"</span>:
                            loop = <span style="color:#0000ff;">false</span>;
                            print(<span style="color:#a31515;">"Closing"</span>);
                            stopLoop = <span style="color:#0000ff;">true</span>;
                            <span style="color:#0000ff;">break</span>;
                        <span style="color:#0000ff;">case</span> <span style="color:#a31515;">"nei"</span>:
                            loop = <span style="color:#0000ff;">false</span>;
                            print(<span style="color:#a31515;">"Closing"</span>);
                            stopLoop = <span style="color:#0000ff;">true</span>;
                            <span style="color:#0000ff;">break</span>;
                        <span style="color:#0000ff;">default</span>:
                            Console.WriteLine(<span style="color:#a31515;">"Please enter yes or no"</span>);
                            <span style="color:#0000ff;">break</span>;
                    }
    
                    <span style="color:#0000ff;">if</span>(stopLoop == <span style="color:#0000ff;">true</span>)
                    {
                        Console.WriteLine(<span style="color:#a31515;">"Do you want to run A, B or C"</span>);
                    }
                }
            }
        }
    }
    </code></pre>
</template>

