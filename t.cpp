/**

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">#include &lt;bits/stdc++.h&gt;</span>
using namespace std;
<span style="color: #333399; font-weight: bold">int</span> <span style="color: #0066BB; font-weight: bold">main</span>()
{
    <span style="color: #888888">// using time http://hilite.me/</span>
    <span style="color: #333399; font-weight: bold">int</span> i <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">7</span>;
    string s <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;&quot;</span>;
    <span style="color: #008800; font-weight: bold">while</span> (i<span style="color: #333333">--</span>)
    {
        string t;
        getline(cin, t);
        s <span style="color: #333333">=</span> s <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&quot;&lt;br /&gt; &quot;</span> <span style="color: #333333">+</span> t;
    }
    cout <span style="color: #333333">&lt;&lt;</span> s;
}
</pre></div>

generate html from   using time http://hilite.me/
and then paste it vscode check the line no. and the i = line no 
and run code , copy the result after the <!-- HTML generated using hilite.me -->
*/

#include <bits/stdc++.h>
using namespace std;
int main()
{

    int i = 16;
    string s = "";
    while (i--)
    {
        string t;
        getline(cin, t);
        s = s + "<br /> " + t;
    }
    cout << s;
}