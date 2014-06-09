---
layout: default
title: "News Center"
id: news
---
<div class='container'>
	<div class='row'>
		<div class='col-md-12'>
			<h1>News</h1>
		</div>
		{% for news in site.data.news %}
		{% if news.visible %}
		<div class='col-md-12'>
			<div class='news-entry'>
		    	<h2 class='title'><a href={{news.url}}>{{news.title}}</a></h2>
				{{news.description | markdownify}}
			</div>
		</div>
		{% endif %}
		{% endfor %}
	</div>
</div>