# DecimalToRoman

Given a positive integer number (eg 42) determine
its Roman numeral representation as a String (eg &quot;XLII&quot;).
You cannot write numerals like IM for 999.
Wikipedia states &quot;Modern Roman numerals are written by
expressing each digit separately starting with the
leftmost digit and skipping any digit with a value of zero.&quot;
Examples:
1 -&gt; &quot;I&quot; | 10 -&gt; &quot;X&quot; | 100 -&gt; &quot;C&quot; | 1000 -&gt; &quot;M&quot;
2 -&gt; &quot;II&quot; | 20 -&gt; &quot;XX&quot; | 200 -&gt; &quot;CC&quot; | 2000 -&gt; &quot;MM&quot;
3 -&gt; &quot;III&quot; | 30 -&gt; &quot;XXX&quot; | 300 -&gt; &quot;CCC&quot; | 3000 -&gt; &quot;MMM&quot;
4 -&gt; &quot;IV&quot; | 40 -&gt; &quot;XL&quot; | 400 -&gt; &quot;CD&quot; | 4000 -&gt; &quot;MMMM&quot;
5 -&gt; &quot;V&quot; | 50 -&gt; &quot;L&quot; | 500 -&gt; &quot;D&quot; |
6 -&gt; &quot;VI&quot; | 60 -&gt; &quot;LX&quot; | 600 -&gt; &quot;DC&quot; |
7 -&gt; &quot;VII&quot; | 70 -&gt; &quot;LXX&quot; | 700 -&gt; &quot;DCC&quot; |
8 -&gt; &quot;VIII&quot; | 80 -&gt; &quot;LXXX&quot; | 800 -&gt; &quot;DCCC&quot; |
9 -&gt; &quot;IX&quot; | 90 -&gt; &quot;XC&quot; | 900 -&gt; &quot;CM&quot; |
1990 -&gt; &quot;MCMXC&quot; (1000 -&gt; &quot;M&quot; + 900 -&gt; &quot;CM&quot; + 90 -&gt; &quot;XC&quot;)
2008 -&gt; &quot;MMVIII&quot; (2000 -&gt; &quot;MM&quot; + 8 -&gt; &quot;VIII&quot;)
99 -&gt; &quot;XCIX&quot; (90 -&gt; &quot;XC&quot; + 9 -&gt; &quot;IX&quot;)
47 -&gt; &quot;XLVII&quot; (40 -&gt; &quot;XL&quot; + 7 -&gt; &quot;VII&quot;)
