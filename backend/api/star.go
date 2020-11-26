package api

import (
	"comment/models"
	"comment/services"
	"github.com/gin-gonic/gin"
)

func CreateStar(c *gin.Context) {
	var service services.CreateStarService
	if err := c.ShouldBind(&service); err != nil {
		c.JSON(400, err.Error())
	} else {
		user := models.CurrentUser(c)
		res := service.Create(user)
		c.JSON(200, res)
	}
}

func DeleteStar(c *gin.Context) {
	var service services.DeleteStarService
	if err := c.ShouldBind(&service); err != nil {
		c.JSON(400, err.Error())
	} else {
		user := models.CurrentUser(c)
		res := service.Delete(user)
		c.JSON(200, res)
	}
}

func StarList(c *gin.Context) {
	var service services.StarListService
	if err := c.ShouldBind(&service); err != nil {
		c.JSON(400, err.Error())
	} else {
		user := models.CurrentUser(c)
		res := service.List(user)
		c.JSON(200, res)
	}
}
