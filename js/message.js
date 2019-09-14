	function wapMessage1() {
		if ($("#Tel1").val() == "") {
			layer.alert('请输入电话！', {
				icon: 2,
				skin: 'layer-ext-moon'
			});
			return false;
		}
		var myreg = /^(0\d{2,3}-?\d{7,8}(-\d{3,5}){0,1})|(1[3|4|7|5|8|9]\d{9})$/;
		if (!myreg.test($("#Tel1").val())){
			layer.alert('请输正确的电话！', {
				icon: 2,
				skin: 'layer-ext-moon'
			});
			return false;
		}
		if($("#RealName1").val()==""){
			layer.alert('请输入姓名！', {
				icon: 2,
				skin: 'layer-ext-moon'
			});
			return false;
		}
		
		var sendUrl="/SiteArticleHelper/WapMessage";
		var myData={
			"siteAlias":$("#siteAlias").val(),
			"title":$("#title1").val(),
			"menuAlias":$("#menuAlias").val(),
			"realName":$("#RealName1").val(),
			"tel":$("#Tel1").val(),
			"company":$("#Company1").val()
		};
		SendMessage(sendUrl,myData);
	}
	
	function wapMessage() {
		if ($("#Tel").val() == "") {
			layer.alert('请输入电话！', {
				icon: 2,
				skin: 'layer-ext-moon'
			});
			return false;
		}
		var myreg = /^(0\d{2,3}-?\d{7,8}(-\d{3,5}){0,1})|(1[3|4|7|5|8|9]\d{9})$/;
		if (!myreg.test($("#Tel").val())){
			layer.alert('请输正确的电话！', {
				icon: 2,
				skin: 'layer-ext-moon'
			});
			return false;
		}
		if($("#RealName").val()==""){
			layer.alert('请输入姓名！', {
				icon: 2,
				skin: 'layer-ext-moon'
			});
			return false;
		}
		if($("#programme").val()=="0"){
			layer.alert('请选择方案！', {
				icon: 2,
				skin: 'layer-ext-moon'
			});
			return false;
		}
		
		var sendUrl="/SiteArticleHelper/WapMessage";
		var myData={
			"siteAlias":$("#siteAlias").val(),
			"menuAlias":$("#menuAlias").val(),
			"title":$("#title").val(),
			"realName":$("#RealName").val(),
			"tel":$("#Tel").val(),
			"company":$("#Company").val(),
			"programme":$("#programme").val(),
			"programmeValue":$("#programme>option:selected").text()
		};
		SendMessage(sendUrl,myData);
	}
	
	function SendMessage(sendUrl,myData){
		 $.ajax({
			type: "POST",
			url: sendUrl,
			dataType: "json",
			timeout: 20000,
			data:myData,
			success: function (data) {
					if (data.Success == "true") {

						layer.alert(data.Msg, {
							icon: 1,
							skin: 'layer-ext-moon'
						}, function (index) {
							layer.close(index);
							$(".fromMsg")[0].reset();
							$(".fromMsg")[1].reset();
						});
					}
					else
					{
						layer.alert(data.Msg, {
							icon: 2,
							skin: 'layer-ext-moon'
						});
					}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert(errorThrown);
			}
		});
	}
	
