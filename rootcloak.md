---
layout: default
title: RootCloak (Xposed) | Matt Joseph
permalink: /rootcloak/
---


<div class="section top-section materialteal">
  <h1 class="section-header">RootCloak (Xposed)</h1>

  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--4-col">
      <img class="img-responsive-80" src="/images/RootCloakIcon.png">
    </div>
    <div class="mdl-cell mdl-cell--8-col">
      <p>This Android app is a module for the Xposed Framework. Some apps, such as banking, enterprise, or audio/video apps will not run if your phone is rooted. This allows you to run apps that detect root without disabling root. It is published under the name <b>devadvance</b>.</p>
      
      <a class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" href="http://repo.xposed.info/module/com.devadvance.rootcloak2">Download (from Xposed repo)</a>

      <a class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" href="https://github.com/devadvance/rootcloak">Source Code (GitHub)</a>

      <br />
      <br />
      <br />
      <p>For a list of working and non-working apps, as well as more technical information, see the RootCloak GitHub wiki:</p>
      <a class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" href="https://github.com/devadvance/rootcloak/wiki">RootCloak Wiki (GitHub)</a>

      <br />
      <br />
      <br />
      <p>If you have an issue with RootCloak, either check the Issues section of GitHub, or visit the XDA Support Thread:</p>
      <a class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" href="https://github.com/devadvance/rootcloak/issues">RootCloak Issues (GitHub)</a>
      <a class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" href="http://forum.xda-developers.com/showthread.php?t=2574647">XDA Support Thread</a>
    </div>
  </div>

</div>

<div class="section materialbrownlightprimary">
  <h1 class="section-header">Understanding RootCloak</h1>

  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">
      <p><i><b>Note: you can read the latest version of this document on the GitHub wiki here: <a href="https://github.com/devadvance/rootcloak/wiki/Understanding-RootCloak">Understanding RootCloak | GitHub - devadvance/rootcloak</a></b></i></p>
        <br />
        <br />
{% capture my-include %}{% include Understanding-RootCloak.md %}{% endcapture %}
{{ my-include | markdownify }}
    </div>
  </div>
</div>
