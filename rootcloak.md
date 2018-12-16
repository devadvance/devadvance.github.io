---
layout: newdesign-page
title: RootCloak (Xposed) | Matt Joseph
excerpt: Android Xposed module to hide root from other apps
permalink: /rootcloak/
---
<div class="center"><amp-img src="/images/RootCloakIcon.png" width="128" height="128" alt="RootCloak Icon"></amp-img></div>

# RootCloak (Xposed)
{: .center}

This Android app is a module for the Xposed Framework. Some apps, such as banking, enterprise, or audio/video apps will not run if your phone is rooted. This allows you to run apps that detect root without disabling root. It is published under the name *devadvance*.

[DOWNLOAD (FROM XPOSED REPO)](http://repo.xposed.info/module/com.devadvance.rootcloak2){:target="_blank"}{:rel="noopener"}{: .pure-button .pure-button-primary }
[SOURCE CODE (GITHUB)](https://github.com/devadvance/rootcloak){:target="_blank"}{:rel="noopener"}{: .pure-button .pure-button-primary }
{: .center}

For a list of working and non-working apps, as well as more technical information, see the RootCloak GitHub wiki:

[ROOTCLOAK WIKI (GITHUB)](https://github.com/devadvance/rootcloak/wiki){:target="_blank"}{:rel="noopener"}{: .pure-button .pure-button-primary }
{: .center}

If you have an issue with RootCloak, either check the Issues section of GitHub, or visit the XDA Support Thread:

[ROOTCLOAK ISSUES (GITHUB)](https://github.com/devadvance/rootcloak/issues){:target="_blank"}{:rel="noopener"}{: .pure-button .pure-button-primary }
[XDA SUPPORT THREAD](https://forum.xda-developers.com/xposed/modules/mod-rootcloak-completely-hide-root-t2574647){:target="_blank"}{:rel="noopener"}{: .pure-button .pure-button-primary }
{: .center}

**Note: with SafetyNet becoming more prevalent, RootCloak development is not very active.**
{: .center}

*Note: you can read the latest version of this document on the GitHub wiki here:
[Understanding RootCloak | GitHub - devadvance/rootcloak](https://github.com/devadvance/rootcloak/wiki/Understanding-RootCloak){:target="_blank"}{:rel="noopener"}*

{% capture my-include %}{% include Understanding-RootCloak.md %}{% endcapture %}
{{ my-include | markdownify }}
