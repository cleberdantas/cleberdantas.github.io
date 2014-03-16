---
layout: post
title: "Latency, bandwidth and the speed of light"
tags: [web, webperf, latency]
---

What if we increase our bandwidth from 5 Mbps to 10 Mbps, will we double our web browsing speed?

I started this blog post with a question to let you guys answer it in the end of this reading.

Nowadays we face a huge problem in all network systems, that’s basically the speed of a piece of information travels from one point to another. The travel time of a certain information between two different locations is what we call __latency__.

Usually the latency time is measured in milliseconds, in most cases. As we aren’t accustomed thinking in milliseconds, below we have a table of some users reactions against some waiting times:

<table class="delay" width="100%" border="1">
<tbody>
<tr>
<td class="header">Delay</td>
<td class="header">User Reaction</td>
</tr>
<tr>
<td class="green">0 &#8211; 100ms</td>
<td>Instant</td>
</tr>
<tr>
<td>100 &#8211; 300ms</td>
<td>Small perceptible delay</td>
</tr>
<tr>
<td>300 &#8211; 1000ms</td>
<td>Machine is working</td>
</tr>
<tr>
<td class="red">1s+</td>
<td>Mental context switch</td>
</tr>
<tr>
<td class="red">10s+</td>
<td>I&#8217;ll come back later&#8230;</td>
</tr>
</tbody>
</table>

Clearly if we want all of our user’s attention we need to keep our page response time under __300 milliseconds__. (hard work).

Ok now we know what latency is, but another important concept that we need to know is the __RTT__. RTT stands for the __round trip time__ of a certain information between two different locations (latency time multiplied by 2).

The big problem with latency in fact is that we are already transmitting data __very__ fast, and we are bounded by a speed limit also known as the __speed of light__.

The [speed of light](https://en.wikipedia.org/wiki/Speed_of_light) by definition is equal to 299 792 458 meters per second or 300 000 kilometres per hour (fast, isn’t it?), but this speed is only reached in [vacuum](https://en.wikipedia.org/wiki/Vacuum).

As the perfect vacuum is not possible in our natural environment and the non-perfect one is really not used in a high scale (only few labs around the world have a vacuum chamber) we will need to use another transmission medium, right? Yes perfect!

[Optical fiber](http://en.wikipedia.org/wiki/Optical_fiber) is a reality (no doubts), It’s through this medium that we are sending information around the world today (usually through the oceans).

The fiber is a very competent medium to transmit light, but we can not compare with vacuum at all, which means the no presence of a medium. Every __transmitting medium__ has associated with itself a [refractive index](http://en.wikipedia.org/wiki/Refractive_index) and in the case of optical fiber this value is ~1.5.

See below some distances and latency times between some cities of our pretty nice planet earth:

| Route | Distance | Time &#8211; vacuum | Time &#8211; fiber | Round Trip Time (RTT) in fiber |
|:--------|:-------:|--------:|--------:|--------:|
| New York to San Francisco   | 4,148 km   | 14 ms   | __21 ms__   | 42 ms   |
| New York to London   | 5,585 km  | 19 ms   | __28 ms__   | 56 ms   |
| New York to Sydney  | 15,993 km   | 53 ms   | __80 ms__   | 160 ms   |


<table style="width: 100%; border-collapse: collapse;">
<colgroup>
<col class="col_1" />
<col class="col_2" />
<col class="col_3" />
<col class="col_4" />
<col class="col_5" /> </colgroup>
<thead>
<tr>
<td style="border-bottom: 0.5pt solid;">Route</td>
<td style="border-bottom: 0.5pt solid;">Distance</td>
<td style="border-bottom: 0.5pt solid;">Time &#8211; vacuum</td>
<td style="border-bottom: 0.5pt solid;">Time &#8211; fiber</td>
<td style="border-bottom: 0.5pt solid;">Round Trip Time (RTT) in fiber</td>
</tr>
</thead>
<tbody>
<tr>
<td style="border-bottom: 0.5pt solid;">
<p id="new_york_to_san">New York to San Francisco</p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="km_id1">4,148 km</p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="ms_id1">14 ms</p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="ms_id2"><span class="strong"><strong>21 ms</strong></span></p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="ms_id3">42 ms</p>
</td>
</tr>
<tr>
<td style="border-bottom: 0.5pt solid;">
<p id="new_york_to_lon">New York to London</p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="km_id2">5,585 km</p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="ms_id4">19 ms</p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="ms_id5"><span class="strong"><strong>28 ms</strong></span></p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="ms_id6">56 ms</p>
</td>
</tr>
<tr>
<td style="border-bottom: 0.5pt solid;">
<p id="new_york_to_syd">New York to Sydney</p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="km_id3">15,993 km</p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="ms_id7">53 ms</p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="ms_id8"><span class="strong"><strong>80 ms</strong></span></p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="ms_id9">160 ms</p>
</td>
</tr>
</tbody>
</table>

The challenge today is trying to reduce those refractive indexes of the transmission mediums, everyday a little bit more, in this way we will end up more close to the known limit, the speed of light (hard work again boys :) )

Realize that a DNS resolution (which occurs in every single page in this world) needs a RTT, establish a TCP connection another RTT, but we know as well that in a single page more than just one DNS resolutions is necessary as well as many others TCP connections to construct the entire page.

Even knowing all this, we wanna keep our apps running under 300 milliseconds? (Are you fucking kidding me?).

Ok, we know how to reuse TCP connections (keep-alive), using CDN and bring users closer to our assets, thus lowering the route which reduces latency.

Now you might be thinking that was because all of this that you are paying enough money to your internet provider, that gives you a super faster internet connection with 10 or 20 Mbps (this is high at least here in Brazil), so this would allow you to web browse very fast, isn’t it? Wrong!

We can compare bandwidth with a pipe of water, the larger the pipe more water I can put inside de pipe, but if the pipe is empty will be spent some time to the water travels from one side to another, got it?

Now you’re thinking: That was because I bought more bandwidth, to have a larger pipe and in this way I can transfer more data, if I have a thinner pipe for sure will be spent more time to transfer all my data from one side to another. Perfect! You’re right!

Yes you’re sure, but realize in the first place that my initial question was about if we increase bandwidth we would get more speed in __web browsing__. I never mentioned about watch a video, listen to a music or even do a live streaming because in those cases for sure having more bandwidth means better performance.

And why? Why watching a video while having more bandwidth makes all difference, but for web browsing not at all?

Well the answer is actually very simple, listen to a music or watch a video means that we are using the TCP protocol (transport) to do something that it was designed for.

The TCP protocol was designed to transmit data in long lived connections and to do bulk data transferring.

Web browsing is actually the opposite of it, we use short connections and we transfer just few data.

Google did two experiments willing to see what would happen if we increase the bandwidth and decrease the latency while web browsing (not videos, not musics). See what happend below:

<figure>
  <a href="/images/bandwidth-vs-latency.png"><img src="/images/bandwidth-vs-latency.png"></a>
  <figcaption><a href="/images/bandwidth-vs-latency.png" title="Google's study">Google's study</a>.</figcaption>
</figure>

When we fix latency and increase the bandwidth (Mbps by Mbps), after 5Mbps until 10Mbps the difference is only 15% (helps but not too much), first graphic.

When we fix latency and increase the bandwidth (Mbps by Mbps), after 5Mbps until 10Mbps the difference is only 15% (helps but not too much), first graphic.

You can see the Google’s study here: https://docs.google.com/a/chromium.org/viewer?a=v&pid=sites&srcid=Y2hyb21pdW0ub3JnfGRldnxneDoxMzcyOWI1N2I4YzI3NzE2

In other words, if you want only to improve your web browsing speed increase your bandwidth (after 5 Mbps) won’t help too much. But breaking the physics laws or a little bit easier than that, help improve the refractive indexes will help a lot :)

#### Oh wait!
Are you in a WIFI or 3G network? Well in this case is even worst, but this a subject to another post. ;)

#### Good news 
HTTP 2.0 is under construction and it will be based on [SPDY](http://en.wikipedia.org/wiki/SPDY) protocol (from Google) that between other things makes a fantastic better use of TCP connections.

#### Conclusion
Web browsing is latency bounded, increase bandwidth after a certain level simply doesn’t make sense.

Decreasing latency is very hard (speed of light)

HTTP 2.0 will help us a lot.

PS: If you liked this blog post please share with your friends. If he’s a web developer do that twice (he deserves it)

Thanks for reading!

[]‘s