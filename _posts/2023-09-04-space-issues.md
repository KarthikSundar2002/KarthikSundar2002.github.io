---
layout: post
title: Never Enough Space in Linux!!
---

There have been several instances in the past, where my Linux root mount will be running out of space. Today is just another instance of it. I was working on building a Conversational Chatbot to help people access my college's website better. However, the database shuts down, as there is no space.

I start with `df -h` to get an idea about the available space.

Once that's done, I go through a checklist

1. Uninstall any unused programs
2. `sudo apt autoremove` - Removes unused packages
3. Clear up the apt cache with `sudo apt-get clean`
4. Linux has a logging mechanism. Over time, these logs could take up quite a lot of space.
    1. Check the amount of space with `journalctl --disk-usage`
    2. Clear old logs with `sudo journalctl --vaccum-time=3d`
5. Snaps end up taking up a lot of space as well. They have their earlier revisions stored as well. To clear these, I run a script which is as follows:
    ```
    #!/bin/bash
    # Removes old revisions of snaps
    # CLOSE ALL SNAPS BEFORE RUNNING THIS
    set -eu
    snap list --all | awk '/disabled/{print $1, $3}' |
    while read snapname revision; do
        snap remove "$snapname" --revision="$revision"
    done
    ```
6. I find the files that occupy the highest space with
`o du -a / | sort -n -r | head -n 20`
7. I don't do this usually, but if I am desperate and fed up, I delete my old and unused versions of the Linux Kernel

These usually free up quite a lot of space. However, if these doesn't work, I try extending the partition. Hope I at least get to complete the project right now. I will update this checklist if I find anything new.