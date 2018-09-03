$(function () {
    $(".editTag").on("click", function () {
        $('#editTagForm').removeAttr('style');
        tid = $(this).parent().siblings().eq(0).find("input[name=tid]").val();
        $.ajax({
            type: "GET", url: editTagUrl + "/" + tid, dataType: "json", success: function (response) {
                $("#editId").val(response["id"]);
                $("#editName").val(response["name"]);
                $("#editFlag").val(response["flag"])
            }, error: function (response) {
                swal(response.responseJSON.message.alert, "", "error")
            }
        });
        return false
    });
    $(".delTag").on("click", function () {
        tid = $(this).parent().siblings().eq(0).find("input[name=tid]").val();
        $("#deleteId").val(tid);
        swal({
            title: "确定删除吗？",
            text: "删除将无法恢复",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                $("#deleteForm").submit()
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal('已取消', ':)', 'error')
            }
        })
    });
    $("#delSelectedTag").on("click", function () {
        ids = new Array();
        $("input[name='tid']:checked").each(function () {
            ids.push($(this).val())
        });
        if (ids.length != 0) {
            $("#deleteId").val(ids);
            formData = $("#deleteForm").serialize();
            swal({
                title: "确定删除吗？",
                text: "删除将无法恢复",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            }).then((result) => {
                if (result.value) {
                    $("#deleteForm").submit()
                } else if (result.dismiss === swal.DismissReason.cancel) {
                    swal('已取消', ':)', 'error')
                }
            })
        } else {
            return false
        }
    });
    $(".delCategory").on("click", function () {
        cid = $(this).parent().siblings().eq(0).find("input[name=cid]").val();
        $("#deleteId").val(cid);
        swal({
            title: "确定删除吗？",
            text: "删除将无法恢复",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "确定",
            cancelButtonText: "取消"
        }).then((result) => {
            if (result.value) {
                $("#deleteForm").submit()
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal('已取消', ':)', 'error')
            }
        })
    });
    $("#delSelectedCategory").on("click", function () {
        ids = new Array();
        $("input[name='cid']:checked").each(function () {
            ids.push($(this).val())
        });
        if (ids.length != 0) {
            $("#deleteId").val(ids);
            swal({
                title: "确定删除吗？",
                text: "删除将无法恢复",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            }).then((result) => {
                if (result.value) {
                    $("#deleteForm").submit()
                } else if (result.dismiss === swal.DismissReason.cancel) {
                    swal('已取消', ':)', 'error')
                }
            })
        } else {
            return false
        }
    });
    $(".delNav").on("click", function () {
        nid = $(this).parent().siblings().eq(0).find("input[name=nid]").val();
        $("#deleteId").val(nid);
        swal({
            title: "确定删除吗？",
            text: "删除将无法恢复",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "确定",
            cancelButtonText: "取消"
        }).then((result) => {
            if (result.value) {
                $("#deleteForm").submit()
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal('已取消', ':)', 'error')
            }
        })
    });
    $("#delSelectedNav").on("click", function () {
        ids = new Array();
        $("input[name='nid']:checked").each(function () {
            ids.push($(this).val())
        });
        if (ids.length != 0) {
            $("#deleteId").val(ids);
            swal({
                title: "确定删除吗？",
                text: "删除将无法恢复",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            }).then((result) => {
                if (result.value) {
                    $("#deleteForm").submit()
                } else if (result.dismiss === swal.DismissReason.cancel) {
                    swal('已取消', ':)', 'error')
                }
            })
        } else {
            return false
        }
    });
    $(".delArticle").on("click", function () {
        aid = $(this).parent().siblings().eq(0).find("input[name=aid]").val();
        $("#deleteId").val(aid);
        swal({
            title: "确定删除吗？",
            text: "删除后可在文章回收站恢复",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "确定",
            cancelButtonText: "取消"
        }).then((result) => {
            if (result.value) {
                $("#deleteForm").submit()
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal('已取消', ':)', 'error')
            }
        })
    });
    $("#delSelectedArticle").on("click", function () {
        ids = new Array();
        $("input[name='aid']:checked").each(function () {
            ids.push($(this).val())
        });
        if (ids.length != 0) {
            $("#deleteId").val(ids);
            swal({
                title: "确定删除吗？",
                text: "删除后可在文章回收站恢复",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            }).then((result) => {
                if (result.value) {
                    $("#deleteForm").submit()
                } else if (result.dismiss === swal.DismissReason.cancel) {
                    swal('已取消', ':)', 'error')
                }
            })
        } else {
            return false
        }
    });
    $(".restoreArticle").on("click", function () {
        aid = $(this).parent().siblings().eq(0).find("input[name=aid]").val();
        $("#restoreId").val(aid);
        swal({
            title: "确定恢复吗？",
            text: "恢复后可在全部文章中查看",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "确定",
            cancelButtonText: "取消"
        }).then((result) => {
            if (result.value) {
                $("#restoreForm").submit()
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal('已取消', ':)', 'error')
            }
        })
    });
    $("#restoreSelectedArticle").on("click", function () {
        ids = new Array();
        $("input[name='aid']:checked").each(function () {
            ids.push($(this).val())
        });
        if (ids.length != 0) {
            $("#restoreId").val(ids);
            swal({
                title: "确定恢复吗？",
                text: "恢复后可在全部文章中查看",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            }).then((result) => {
                if (result.value) {
                    $("#restoreForm").submit()
                } else if (result.dismiss === swal.DismissReason.cancel) {
                    swal('已取消', ':)', 'error')
                }
            })
        } else {
            return false
        }
    });
    $(".destroyArticle").on("click", function () {
        aid = $(this).parent().siblings().eq(0).find("input[name=aid]").val();
        $("#destroyId").val(aid);
        swal({
            title: "确定删除吗？",
            text: "删除将无法恢复",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "确定",
            cancelButtonText: "取消"
        }).then((result) => {
            if (result.value) {
                $("#destroyForm").submit()
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal('已取消', ':)', 'error')
            }
        })
    });
    $("#destroySelectedArticle").on("click", function () {
        ids = new Array();
        $("input[name='aid']:checked").each(function () {
            ids.push($(this).val())
        });
        if (ids.length != 0) {
            $("#destroyId").val(ids);
            swal({
                title: "确定删除吗？",
                text: "删除将无法恢复",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            }).then((result) => {
                if (result.value) {
                    $("#destroyForm").submit()
                } else if (result.dismiss === swal.DismissReason.cancel) {
                    swal('已取消', ':)', 'error')
                }
            })
        } else {
            return false
        }
    });
    $(".delPage").on("click", function () {
        pid = $(this).parent().siblings().eq(0).find("input[name=pid]").val();
        $("#deleteId").val(pid);
        swal({
            title: "确定删除吗？",
            text: "删除后可在单页回收站恢复",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "确定",
            cancelButtonText: "取消"
        }).then((result) => {
            if (result.value) {
                $("#deleteForm").submit()
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal('已取消', ':)', 'error')
            }
        })
    });
    $("#delSelectedPage").on("click", function () {
        ids = new Array();
        $("input[name='pid']:checked").each(function () {
            ids.push($(this).val())
        });
        if (ids.length != 0) {
            $("#deleteId").val(ids);
            swal({
                title: "确定删除吗？",
                text: "删除后可在单页回收站恢复",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            }).then((result) => {
                if (result.value) {
                    $("#deleteForm").submit()
                } else if (result.dismiss === swal.DismissReason.cancel) {
                    swal('已取消', ':)', 'error')
                }
            })
        } else {
            return false
        }
    });
    $(".restorePage").on("click", function () {
        pid = $(this).parent().siblings().eq(0).find("input[name=pid]").val();
        $("#restoreId").val(pid);
        swal({
            title: "确定恢复吗？",
            text: "恢复后可在单页列表中查看",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "确定",
            cancelButtonText: "取消"
        }).then((result) => {
            if (result.value) {
                $("#restoreForm").submit()
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal('已取消', ':)', 'error')
            }
        })
    });
    $("#restoreSelectedPage").on("click", function () {
        ids = new Array();
        $("input[name='pid']:checked").each(function () {
            ids.push($(this).val())
        });
        if (ids.length != 0) {
            $("#restoreId").val(ids);
            swal({
                title: "确定恢复吗？",
                text: "恢复后可在单页列表中查看",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            }).then((result) => {
                if (result.value) {
                    $("#restoreForm").submit()
                } else if (result.dismiss === swal.DismissReason.cancel) {
                    swal('已取消', ':)', 'error')
                }
            })
        } else {
            return false
        }
    });
    $(".destroyPage").on("click", function () {
        pid = $(this).parent().siblings().eq(0).find("input[name=pid]").val();
        $("#destroyId").val(pid);
        swal({
            title: "确定删除吗？",
            text: "删除将无法恢复",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "确定",
            cancelButtonText: "取消"
        }).then((result) => {
            if (result.value) {
                $("#destroyForm").submit()
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal('已取消', ':)', 'error')
            }
        })
    });
    $("#destroySelectedPage").on("click", function () {
        ids = new Array();
        $("input[name='pid']:checked").each(function () {
            ids.push($(this).val())
        });
        if (ids.length != 0) {
            $("#destroyId").val(ids);
            swal({
                title: "确定删除吗？",
                text: "删除将无法恢复",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            }).then((result) => {
                if (result.value) {
                    $("#destroyForm").submit()
                } else if (result.dismiss === swal.DismissReason.cancel) {
                    swal('已取消', ':)', 'error')
                }
            })
        } else {
            return false
        }
    });
    $(".showComment").on("click", function () {
        cid = $(this).parent().siblings().eq(0).find("input[name=cid]").val();
        $.ajax({
            type: "GET", url: showCommentUrl + "/" + cid, dataType: "json", success: function (response) {
                $("#cid").val(response["id"]);
                $("#nickname").html(response["nickname"]);
                $("#email").html(response["email"]);
                $("#content").html(response["content"]);
                $("#reply").val(response["reply"]);
                $("#created_at").html(response["created_at"]);
                $("#commentModal").modal("show")
            }, error: function (response) {
                swal(response["message"]["alert"], "", "error")
            }
        });
        return false
    });
    $(".checkComment").on("click", function () {
        cid = $("#cid").val();
        $("#checkId").val(cid);
        $("#checkForm").submit()
    });
    $("#checkSelectedComment").on("click", function () {
        ids = new Array();
        $("input[name='cid']:checked").each(function () {
            ids.push($(this).val())
        });
        if (ids.length != 0) {
            $("#checkId").val(ids);
            swal({
                title: "确定操作全部吗？",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            }).then((result) => {
                if (result.value) {
                    $("#checkForm").submit()
                } else if (result.dismiss === swal.DismissReason.cancel) {
                    swal('已取消', ':)', 'error')
                }
            })
        } else {
            return false
        }
    });
    $(".delComment").on("click", function () {
        cid = $(this).parent().siblings().eq(0).find("input[name=cid]").val();
        $("#deleteId").val(cid);
        swal({
            title: "确定删除吗？",
            text: "删除将无法恢复",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "确定",
            cancelButtonText: "取消"
        }).then((result) => {
            if (result.value) {
                $("#deleteForm").submit()
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal('已取消', ':)', 'error')
            }
        })
    });
    $("#delSelectedComment").on("click", function () {
        ids = new Array();
        $("input[name='cid']:checked").each(function () {
            ids.push($(this).val())
        });
        if (ids.length != 0) {
            $("#deleteId").val(ids);
            swal({
                title: "确定删除吗？",
                text: "删除将无法恢复",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            }).then((result) => {
                if (result.value) {
                    $("#deleteForm").submit()
                } else if (result.dismiss === swal.DismissReason.cancel) {
                    swal('已取消', ':)', 'error')
                }
            })
        } else {
            return false
        }
    });
    $(".editLink").on("click", function () {
        $('#editLinkForm').removeAttr('style');
        lid = $(this).parent().siblings().eq(0).find("input[name=lid]").val();
        $.ajax({
            type: "GET", url: editLinkUrl + "/" + lid, dataType: "json", success: function (response) {
                $("#editId").val(response["id"]);
                $("#editName").val(response["name"]);
                $("#editUrl").val(response["url"]);
                $("#editSort").val(response["sort"])
            }, error: function (response) {
                swal(response.responseJSON.message.alert, "", "error")
            }
        });
        return false
    });
    $(".delLink").on("click", function () {
        lid = $(this).parent().siblings().eq(0).find("input[name=lid]").val();
        $("#deleteId").val(lid);
        swal({
            title: "确定删除吗？",
            text: "删除将无法恢复",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "确定",
            cancelButtonText: "取消"
        }).then((result) => {
            if (result.value) {
                $("#deleteForm").submit()
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal('已取消', ':)', 'error')
            }
        })
    });
    $("#delSelectedLink").on("click", function () {
        ids = new Array();
        $("input[name='lid']:checked").each(function () {
            ids.push($(this).val())
        });
        if (ids.length != 0) {
            $("#deleteId").val(ids);
            swal({
                title: "确定删除吗？",
                text: "删除将无法恢复",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            }).then((result) => {
                if (result.value) {
                    $("#deleteForm").submit()
                } else if (result.dismiss === swal.DismissReason.cancel) {
                    swal('已取消', ':)', 'error')
                }
            })
        } else {
            return false
        }
    });
    $(".showMessage").on("click", function () {
        mid = $(this).parent().siblings().eq(0).find("input[name=mid]").val();
        $.ajax({
            type: "GET", url: showMessageUrl + "/" + mid, dataType: "json", success: function (response) {
                $("#mid").val(response["id"]);
                $("#nickname").html(response["nickname"]);
                $("#email").html(response["email"]);
                $("#content").html(response["content"]);
                $("#reply").val(response["reply"]);
                $("#created_at").html(response["created_at"]);
                $("#messageModal").modal("show")
            }, error: function (response) {
                swal(response["message"]["alert"], "", "error")
            }
        });
        return false
    });
    $(".checkMessage").on("click", function () {
        mid = $("#mid").val();
        $("#checkId").val(mid);
        $("#checkForm").submit()
    });
    $("#checkSelectedMessage").on("click", function () {
        ids = new Array();
        $("input[name='mid']:checked").each(function () {
            ids.push($(this).val())
        });
        if (ids.length != 0) {
            $("#checkId").val(ids);
            swal({
                title: "确定操作全部吗？",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            }).then((result) => {
                if (result.value) {
                    $("#checkForm").submit()
                } else if (result.dismiss === swal.DismissReason.cancel) {
                    swal('已取消', ':)', 'error')
                }
            })
        } else {
            return false
        }
    });
    $(".delMessage").on("click", function () {
        mid = $(this).parent().siblings().eq(0).find("input[name=mid]").val();
        $("#deleteId").val(mid);
        swal({
            title: "确定删除吗？",
            text: "删除将无法恢复",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "确定",
            cancelButtonText: "取消"
        }).then((result) => {
            if (result.value) {
                $("#deleteForm").submit()
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal('已取消', ':)', 'error')
            }
        })
    });
    $("#delSelectedMessage").on("click", function () {
        ids = new Array();
        $("input[name='mid']:checked").each(function () {
            ids.push($(this).val())
        });
        if (ids.length != 0) {
            $("#deleteId").val(ids);
            swal({
                title: "确定删除吗？",
                text: "删除将无法恢复",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            }).then((result) => {
                if (result.value) {
                    $("#deleteForm").submit()
                } else if (result.dismiss === swal.DismissReason.cancel) {
                    swal('已取消', ':)', 'error')
                }
            })
        } else {
            return false
        }
    });
    $(".delOperationLogs").on("click", function () {
        opid = $(this).parent().siblings().eq(0).find("input[name=opid]").val();
        $("#deleteId").val(opid);
        swal({
            title: "确定删除吗？",
            text: "删除将无法恢复",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "确定",
            cancelButtonText: "取消"
        }).then((result) => {
            if (result.value) {
                $("#deleteForm").submit()
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal('已取消', ':)', 'error')
            }
        })
    });
    $("#delSelectedOperationLogs").on("click", function () {
        ids = new Array();
        $("input[name='opid']:checked").each(function () {
            ids.push($(this).val())
        });
        if (ids.length != 0) {
            $("#deleteId").val(ids);
            formData = $("#deleteForm").serialize();
            swal({
                title: "确定删除吗？",
                text: "删除将无法恢复",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            }).then((result) => {
                if (result.value) {
                    $("#deleteForm").submit()
                } else if (result.dismiss === swal.DismissReason.cancel) {
                    swal('已取消', ':)', 'error')
                }
            })
        } else {
            return false
        }
    });
    $(".editPermission").on("click", function () {
        $('#editPermissionForm').removeAttr('style');
        pid = $(this).parent().siblings().eq(0).find("input[name=pid]").val();
        $.ajax({
            type: "GET", url: editPermissionUrl + "/" + pid, dataType: "json", success: function (response) {
                $("#editId").val(response["id"]);
                $("#editName").val(response["name"]);
                $("#editRoute").val(response["route"])
            }, error: function (response) {
                swal(response.responseJSON.message.alert, "", "error")
            }
        });
        return false
    });
    $(".delPermission").on("click", function () {
        pid = $(this).parent().siblings().eq(0).find("input[name=pid]").val();
        $("#deleteId").val(pid);
        swal({
            title: "确定删除吗？",
            text: "删除将无法恢复",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                $("#deleteForm").submit()
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal('已取消', ':)', 'error')
            }
        })
    });
    $("#delSelectedPermission").on("click", function () {
        ids = new Array();
        $("input[name='pid']:checked").each(function () {
            ids.push($(this).val())
        });
        if (ids.length != 0) {
            $("#deleteId").val(ids);
            formData = $("#deleteForm").serialize();
            swal({
                title: "确定删除吗？",
                text: "删除将无法恢复",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            }).then((result) => {
                if (result.value) {
                    $("#deleteForm").submit()
                } else if (result.dismiss === swal.DismissReason.cancel) {
                    swal('已取消', ':)', 'error')
                }
            })
        } else {
            return false
        }
    });
    $(".delRole").on("click", function () {
        rid = $(this).parent().siblings().eq(0).find("input[name=rid]").val();
        $("#deleteId").val(rid);
        swal({
            title: "确定删除吗？",
            text: "删除将无法恢复",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "确定",
            cancelButtonText: "取消"
        }).then((result) => {
            if (result.value) {
                $("#deleteForm").submit()
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal('已取消', ':)', 'error')
            }
        })
    });
    $("#delSelectedRole").on("click", function () {
        ids = new Array();
        $("input[name='rid']:checked").each(function () {
            ids.push($(this).val())
        });
        if (ids.length != 0) {
            $("#deleteId").val(ids);
            swal({
                title: "确定删除吗？",
                text: "删除将无法恢复",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            }).then((result) => {
                if (result.value) {
                    $("#deleteForm").submit()
                } else if (result.dismiss === swal.DismissReason.cancel) {
                    swal('已取消', ':)', 'error')
                }
            })
        } else {
            return false
        }
    });
    $(".delUser").on("click", function () {
        uid = $(this).parent().siblings().eq(0).find("input[name=uid]").val();
        $("#deleteId").val(uid);
        swal({
            title: "确定删除吗？",
            text: "删除后用户将被移到小黑屋",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "确定",
            cancelButtonText: "取消"
        }).then((result) => {
            if (result.value) {
                $("#deleteForm").submit()
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal('已取消', ':)', 'error')
            }
        })
    });
    $("#delSelectedUser").on("click", function () {
        ids = new Array();
        $("input[name='uid']:checked").each(function () {
            ids.push($(this).val())
        });
        if (ids.length != 0) {
            $("#deleteId").val(ids);
            swal({
                title: "确定删除吗？",
                text: "删除后用户将被移到小黑屋",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            }).then((result) => {
                if (result.value) {
                    $("#deleteForm").submit()
                } else if (result.dismiss === swal.DismissReason.cancel) {
                    swal('已取消', ':)', 'error')
                }
            })
        } else {
            return false
        }
    });
    $(".restoreUser").on("click", function () {
        uid = $(this).parent().siblings().eq(0).find("input[name=uid]").val();
        $("#restoreId").val(uid);
        swal({
            title: "确定恢复吗？",
            text: "恢复后可在全部用户列表查看",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "确定",
            cancelButtonText: "取消"
        }).then((result) => {
            if (result.value) {
                $("#restoreForm").submit()
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal('已取消', ':)', 'error')
            }
        })
    });
    $("#restoreSelectedUser").on("click", function () {
        ids = new Array();
        $("input[name='uid']:checked").each(function () {
            ids.push($(this).val())
        });
        if (ids.length != 0) {
            $("#restoreId").val(ids);
            swal({
                title: "确定恢复吗？",
                text: "恢复后可在全部用户列表查看",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            }).then((result) => {
                if (result.value) {
                    $("#restoreForm").submit()
                } else if (result.dismiss === swal.DismissReason.cancel) {
                    swal('已取消', ':)', 'error')
                }
            })
        } else {
            return false
        }
    });
    $(".destroyUser").on("click", function () {
        uid = $(this).parent().siblings().eq(0).find("input[name=uid]").val();
        $("#destroyId").val(uid);
        swal({
            title: "确定删除吗？",
            text: "删除将无法恢复",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "确定",
            cancelButtonText: "取消"
        }).then((result) => {
            if (result.value) {
                $("#destroyForm").submit()
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal('已取消', ':)', 'error')
            }
        })
    });
    $("#destroySelectedUser").on("click", function () {
        ids = new Array();
        $("input[name='uid']:checked").each(function () {
            ids.push($(this).val())
        });
        if (ids.length != 0) {
            $("#destroyId").val(ids);
            swal({
                title: "确定删除吗？",
                text: "删除将无法恢复",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            }).then((result) => {
                if (result.value) {
                    $("#destroyForm").submit()
                } else if (result.dismiss === swal.DismissReason.cancel) {
                    swal('已取消', ':)', 'error')
                }
            })
        } else {
            return false
        }
    });
    $(".delSubscribes").on("click", function () {
        sid = $(this).parent().siblings().eq(0).find("input[name=sid]").val();
        $("#deleteId").val(sid);
        swal({
            title: "确定删除吗？",
            text: "删除将无法恢复",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "确定",
            cancelButtonText: "取消"
        }).then((result) => {
            if (result.value) {
                $("#deleteForm").submit()
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal('已取消', ':)', 'error')
            }
        })
    });
    $("#delSelectedSubscribes").on("click", function () {
        ids = new Array();
        $("input[name='sid']:checked").each(function () {
            ids.push($(this).val())
        });
        if (ids.length != 0) {
            $("#deleteId").val(ids);
            formData = $("#deleteForm").serialize();
            swal({
                title: "确定删除吗？",
                text: "删除将无法恢复",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            }).then((result) => {
                if (result.value) {
                    $("#deleteForm").submit()
                } else if (result.dismiss === swal.DismissReason.cancel) {
                    swal('已取消', ':)', 'error')
                }
            })
        } else {
            return false
        }
    });
    $("#pushSelected").on("click", function () {
        ids = new Array();
        $("input[name='sid']:checked").each(function () {
            ids.push($(this).val())
        });
        if (ids.length != 0) {
            $("#pushSelectedUser").val(ids);
            $("#subscribe-modal").modal("show");

        }
    });
});

function selectAll(id) {
    $("input[name=" + id + "]:checkbox").iCheck('check')
}

function selectEmpty(id) {
    $("input[name=" + id + "]:checkbox").iCheck('uncheck')
}

function selectReverse(id) {
    $("input[name=" + id + "]:checkbox").iCheck('toggle')
}

function jumpTo(title, msg, url, type) {
    swal({title: title, text: msg, type: type, timer: 3000}).then(function () {
        window.location.href = url
    }, function (dismiss) {
        if (dismiss === "timer") {
            window.location.href = url
        }
    })
}
