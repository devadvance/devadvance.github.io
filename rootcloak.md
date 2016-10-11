---
layout: default
title: RootCloak (Xposed) | Matt Joseph
permalink: /rootcloak/
---


<div class="section top-section materialteal">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="section-header">RootCloak (Xposed)</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="row">
            <div class="col-sm-3">
             <img class="img-responsive" src="/images/RootCloakIcon.png" />
            </div>

            <div class="col-sm-9">
            <p>This Android app is a module for the Xposed Framework. Some apps, such as banking, enterprise, or audio/video apps will not run if your phone is rooted. This allows you to run apps that detect root without disabling root. It is published under the name <b>devadvance</b>.</p>
            
            <a href="http://repo.xposed.info/module/com.devadvance.rootcloak2" class="btn btn-primary btn-lg">Download (from Xposed repo)</a> 
            <a href="https://github.com/devadvance/rootcloak" class="btn btn-primary btn-lg">Source Code (GitHub)</a>

            <br />
            <br />
            <br />
            <p>For a list of working and non-working apps, as well as more technical information, see the RootCloak GitHub wiki:</p><a href="https://github.com/devadvance/rootcloak/wiki" class="btn btn-primary btn-lg">RootCloak Wiki (GitHub)</a>

            <br />
            <br />
            <br />
            <p>If you have an issue with RootCloak, either check the Issues section of GitHub, or visit the XDA Support Thread:</p>
            <a href="https://github.com/devadvance/rootcloak/issues" class="btn btn-primary btn-lg">RootCloak Issues (GitHub)</a><a href="http://forum.xda-developers.com/showthread.php?t=2574647" class="btn btn-primary btn-lg">XDA Support Thread</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

<div class="section materialbrownlightprimary">
  <div class="container">

    <div class="row">
      <div class="col-md-12">
        <h1 class="section-header">Understanding RootCloak</h1>
        <p><i><b>Note: you can read the latest version of this document on the GitHub wiki here: <a href="https://github.com/devadvance/rootcloak/wiki/Understanding-RootCloak">Understanding RootCloak | GitHub - devadvance/rootcloak</a></b></i></p>
        <br />
        <br />
{% capture my-include %}{% include Understanding-RootCloak.md %}{% endcapture %}
{{ my-include | markdownify }}
      </div>
    </div>
  </div>
</div>
